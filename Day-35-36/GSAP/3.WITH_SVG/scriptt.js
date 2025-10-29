var initialPath=`M 10 100 Q 700 100 1390 100`

var finalPath=`M 10 50 Q 700 50 1390 50`

var string=document.getElementById("string")



string.addEventListener("mousemove",function(dets){
      path=`M 10 50 Q ${dets.x} ${dets.y} 1390 50`
      gsap.to("svg path",{
            attr:{d:path},
            duration:0.2,
            ease:"power3.out",
      })
})


string.addEventListener("mouseleave",function(){
      gsap.to("svg path",{
            attr:{d:finalPath},
            ease:"bounce",
            duration:0.8
      })
})