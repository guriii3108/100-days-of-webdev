let main=document.querySelector("#main")
let cursor=document.querySelector("#cursor")
let image=document.querySelector("#image")

window.addEventListener("mousemove",function(e){
      gsap.to("#cursor",{
            x:e.x,
            y:e.y,
            // duration:1,
            // top:'0',
            // left:'-20',
            // transform:"translateX(-50%)",
            // transform:"translateY(-50%)",
      })
})

image.addEventListener("mouseenter",function(e){
      gsap.to(cursor,{
            scale:3,
      })  
})
image.addEventListener("mouseleave",function(e){
      gsap.to(cursor,{
            scale:1,
      })  
})



