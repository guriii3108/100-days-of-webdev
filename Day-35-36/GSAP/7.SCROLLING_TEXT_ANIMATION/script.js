window.addEventListener("wheel",function(e){
      if(e.deltaY>=0){
            console.log("positive");
            gsap.to(".marque",{
                  transform:'translateX(-200%)',
                  repeat:-1,
                  duration:5,
                  ease:'none'
            })

            gsap.to(".marque img",{
                  rotate:180
            })
      }
            else{
                  console.log("negative");
                  gsap.to(".marque",{
                  transform:'translateX(0%)',
                  repeat:-1,
                  duration:5,
                  ease:'none'
            })
             gsap.to(".marque img",{
                  rotate:0
            })
            }
      })