// gsap.from("#page1 #box",{
//       scale:0,
//       duration:1,
//       delay:1,
//       rotate:360
// })
// gsap.from("#page2 #box",{
//       scale:0,
//       duration:1,
//       delay:1,
//       rotate:360,
//       scrollTrigger:{
//             trigger:"#page2 #box",
//             scroller:"body",
//             markers:true,
//             start:"top 60%"

//       }
// })
// =======================================
// gsap.from("#page2 h1",{
//       opacity:0,
//       y:40,
//       duration:2,
//       scrollTrigger:{
//             trigger:"#page2 h1",
//             scroller:"body",
//             markers:true,
//             start:"top 50%"
//       }

// })
// gsap.from("#page2 h2",{
//       opacity:0,
//       x:-400,
//       duration:2,
//       scrollTrigger:{
//             trigger:"#page2 h2",
//             scroller:"body",
//             markers:true,
//             start:"top 50%"
//       }

// })
// =======================================
// //PIN PROPERTY:
// gsap.from("#page2 #box",{
//       scale:0,
//       opacity:0,
//       durstion:1,
//       rotate:720,
//       scrollTrigger:{
//             trigger:"#page2 #box",
//             scroller:"body",
//             markers:true,
//             start:"top 60%",
//             end:"top 30%",
//             scrub:3,
//             prin:true,
//       }
// })

// =======================================


gsap.to("#page2 h1",{
      transform:"translate(-70%)",
      scrollTrigger:{
            trigger:"#page2",
            scroller:"body",
            markers:true,
            start:"top 0%",
            end:"top -100%",
            scrub:3,
            pin:true
      }
})
