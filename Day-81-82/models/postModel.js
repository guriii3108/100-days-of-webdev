const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    date: {
        type: Date,
        default: Date.now(),
    },
    content: {
        type: String,
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            },
        ],
    },
    likes:[
        {type: mongoose.Schema.Types.ObjectId,
            ref:"user",  
        }
    ],
});

module.exports = mongoose.model("post", postSchema);
