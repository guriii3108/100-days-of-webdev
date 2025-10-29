const breakText = () => {
      let h1 = document.querySelector("h1")
      let h1Text = h1.textContent
      // console.log(h1Text);

      var splittedText = h1Text.split('')
      // console.log(splittedText); //give array ['g','u','r','v',......]

      var halfValue=splittedText.length/2

      var clutter = "" //at starting .. blank 
      splittedText.forEach((elem,idx) => {
            if(idx<halfValue){
                  clutter += `<span class='a'>${elem}</span>`;
            }else{
                  clutter += `<span class='b'>${elem}</span>`;
            }
      })
      // console.log(clutter);

      h1.innerHTML = clutter
}

breakText();

gsap.from('.a',{
      y:70,
      opacity:0,
      duration:0.3,
      delay:0.5,
      stagger:0.15
})
gsap.from('.b',{
      y:70,
      opacity:0,
      duration:0.3,
      delay:0.5,
      stagger:-0.15
})
