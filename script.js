gsap.fromTo(
    '.loading-page',
    { opacity:1 }, 
    {
      opacity:0,
      duration:3,
      delay:5,
      'z-index':0
    }
);

gsap.fromTo('.logo-name' , {
    y:50,
    opacity:0
},{
    y:0,
    opacity:1,
    duration:0.8,
    delay:3,
}
);