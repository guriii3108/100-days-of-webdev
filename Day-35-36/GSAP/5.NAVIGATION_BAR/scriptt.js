
var menuOpen = document.querySelector("#menu-open")
var closeMenu=document.querySelector("#close-menu")

var openMenu=()=>{
      var tl = gsap.timeline()
      tl.to("#full", {
            right: 0,
            duration: 0.7,
      })
      tl.from("#full .navopt", {
            y:-80,
            duration:1,
            stagger:0.3,
            opacity:0,
      })

}
menuOpen.addEventListener("click",openMenu)

closeMenu.addEventListener("click", function () {
      gsap.to("#full", {
            right: '-40%',
            duration: 1.5,
            delay:0.4
      })
})

