const express = require("express");
const path = require("path");
const userModel = require("./models/userModel");
const postModel = require("./models/postModel");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/login", (req, res) => {
    res.render("login");
});

//registered the user..and encrypt the pasword using bcrypt and send the token via jwt
app.post("/register", async (req, res) => {
    let { email, password, age, name, username } = req.body;
    //before creating... we have to check if account exist or not
    let user = await userModel.findOne({ email }); //find account on basis of email
    if (user) return res.status(500).send("User already registered"); //if user already exist then respond

    //if not exist.. now we can create on basis of new info
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            //pass that filled by user
            let createdUser = await userModel.create({
                username,
                email,
                age,
                name,
                password: hash, //we have so save hash as our passsword... (encrypted)
            });

            //now we have user.. now we have to send the token of our user to cookie by jwt
            let token = jwt.sign(
                { email: email, userid: userModel._id },
                "Shrutiii"
            ); //we can store any data.. and we have to take secret key
            res.cookie("token", token);
            //res.send("registered"); //user created... token sended..and cookie set.. and password hashed
            res.redirect("/login");
        });
    });
});

//now we have to set login and check the hashed password thorugh bcrypt.compare..
app.post("/login", async (req, res) => {
    let { email, password } = req.body;

    //we have to check before login that user exist or not...
    let user = await userModel.findOne({ email }); //find account on basis of email
    if (!user) return res.status(400).send("Something went wrong"); //if user not present.. we juss show the message

    //now we have user.. so we can use bcrypt.comapre to check our databse pass hash and the user written password while login and give access.

    bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
            //if we have user.. now we have to send the token of our user to cookie by jwt like /register
            let token = jwt.sign(
                { email: email, userid: user._id },
                "Shrutiii"
            );
            res.cookie("token", token); //setting the token is very important

            res.status(200).redirect("/profile"); //You can login
        } else {
            res.send("Email or password is incorrect");
        }
    });
});

//while logout. juss remove the cookie..(token that we sended via jwt)
app.get("/logout", (req, res) => {
    res.cookie("token", ""); //empty the cookie
    res.redirect("/login");
});

//middleware for protectted routed
function isLoggedIn(req, res, next) {
    if (req.cookies.token === "") res.redirect("/login");
    //if the value is blacked... juss redirect or send message
    //if out token is not blanked ..check is its valid token by jwt.verify
    else {
        let data = jwt.verify(req.cookies.token, "Shrutiii"); //we recieve the userid,email(that we stored in jwt at first time.. we get here in data)

        //now put that data in req... so we can access in it the route by req.user and all other routes..
        req.user = data;
        next();
    }
}

//ab ye profile tabhi open ho when we are loggedin... so we can attach middleware in it... so before getting to profile route it get checked the code written in middleware
app.get("/profile", isLoggedIn, async (req, res) => {
    // console.log(req.user); // we can get the data through middleware passing...
    let user = await userModel
        .findOne({ email: req.user.email })
        .populate("posts"); // this will get us whole user and(user.email cuz we stored data in req.user)
    //post field populated to used it in profile by user....

    // console.log(user);
    res.render("profile", { user }); // then we can send user to profile page...
});

//feed page to show all posts from all users
app.get("/feed", isLoggedIn, async (req, res) => {
    //get all posts and populate user data
    let posts = await postModel.find().populate("user").sort({ date: -1 }); //sort by date, newest first
    //get current user for like functionality
    let currentUser = await userModel.findOne({ email: req.user.email });
    res.render("feed", { posts, currentUser });
});

//create new post ..(only post when user is loged in.. so passed through isloggedin middleware)
app.post("/post", isLoggedIn, async (req, res) => {
    //find which user is logged in first..
    let user = await userModel.findOne({ email: req.user.email });
    let { content } = req.body;

    let post = await postModel.create({
        user: user._id,
        content,
    }); //post created.. now post know who is it's user..

    //now we have to tell the user.. that he created the post
    user.posts.push(post._id);
    await user.save(); //we have to save it also.. as we pushed it by hand...

    //to show post on profile.. go to profile route and populate(expand) the post array...
    res.redirect("/profile");
});

//like and unlike feature
app.get("/like/:id", isLoggedIn, async (req, res) => {
    //find which post we are talking about
    let post = await postModel.findOne({ _id: req.params.id }).populate("user"); //we are in post field and we populated the user
    // console.log(req.user);
    if (post.likes.indexOf(req.user.userid) === -1) {
        //-1 means if that userid doesnt exist in the likes array
        post.likes.push(req.user.userid); //push that user in post likes array means like+1
    } else {
        post.likes.splice(post.likes.indexOf(req.user.userid), 1); //meaans if already having index.. splice krdo.. means remove kardo...
    }
    await post.save();
    //redirect based on where user came from
    if (req.query.from === 'feed') {
        res.redirect("/feed");
    } else {
        res.redirect("/profile");
    }
});

//edit feature
app.get("/edit/:id", isLoggedIn, async (req, res) => {
    //find which post we are talking about(which we gonna edit)
    let post = await postModel.findOne({ _id: req.params.id }).populate("user");
    // await post.save();
    res.render("edit", { post, from: req.query.from });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
    //find which post we are talking about(which we gonna update)
    let post = await postModel.findOneAndUpdate({ _id: req.params.id },{content: req.body.newcontent},{new:true})
    // await post.save();
    //redirect based on where user came from (from form data)
    if (req.body.from === 'feed') {
        res.redirect("/feed");
    } else {
        res.redirect('/profile');
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
