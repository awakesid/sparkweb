let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


const nav=document.querySelector(".navbar");
const text=document.querySelector(".text");
const tee=document.querySelector(".tee");

const t1=new TimelineMax();
t1.fromTo(nav,
  1,
  {y:"-100%"},
  {y:"0%", ease: Power2.easeInOut }
  )
  .fromTo(
    tee,
    1.5,
    {y: "100%"},
    {y: "0%", ease: Power2.easeInOut},
    "-=1"
  )
    .fromTo(
      text,
      1,
      {opacity:0},
      {opacity:1, ease: Power2.easeInOut},
      "-=1"

    )
  






