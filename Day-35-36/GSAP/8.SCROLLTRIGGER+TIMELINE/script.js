function page1Animation(){
      var tl = gsap.timeline()

tl.from("nav h1,nav h4,nav button", {
      y: -25,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      delay: 0.8
})

tl.from(".center-part1 h1", {
      x: -500,
      opacity: 0,
      duration: 0.6
})
tl.from(".center-part1 p", {
      x: -100,
      opacity: 0,
      duration: 0.4
})
tl.from(".center-part1 button", {
      opacity: 0,
      duration: 0.3,
})
tl.from(".center-part2 img", {
      opacity: 0,
      // delay:-1
      duration: 0.5
}, "-=0.5") //chalega timeline ke andar ki bas 1 sec phle start ho jayega

tl.from(".section-bottom img",{
      opacity:0,
      y:30,
      stagger:0.15,
      duartion:0.6,
})
}

function page2Animation(){
      var tl2=gsap.timeline({
      scrollTrigger:{
            trigger:'.section2',
            scroller:'body',
            // markers:true,
            start:'top 50%',
            scrub:2,
            end:'top 10%'
      }
})
tl2.from(".services",{
      x:-300,
      opacity:0,
      duration:0.5,    
})
tl2.from(".elem.line1.left",{
      x:-300,
      opacity:0,
      duration:1
},"anim")
tl2.from(".elem.line1.right",{
      x:300,
      opacity:0,
      duration:1
},"anim")
//when same name is given to both... so that they do at same time.... (in timeline)

tl2.from(".elem.line2.left",{
      x:-300,
      opacity:0,
      duration:1
},"same")
tl2.from(".elem.line2.right",{
      x:300,
      opacity:0,
      duration:1
},"same")
}

page1Animation()
page2Animation()
