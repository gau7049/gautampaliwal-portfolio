let cursor = document.querySelector("#mini-circle"), timeout;

function changeCursorShape(){
  cursor.style.height = "20px";
  cursor.style.width = "20px";
  cursor.style.left = "-6px";
  cursor.style.top = "-13px";
}

function normalCursorShape(){
  cursor.style.height = "10px";
  cursor.style.width = "10px";
  cursor.style.left = "0px";
  cursor.style.top = "0px";
}

function firstPageAnime(){
    var t1 = gsap.timeline();
  
    t1.from("#nav",{
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundinglem",{
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: 0.2
      })
    .from("#hero-footer",{
        y: "-10",
        opacity: 0,
        duration: 1.2,
        delay: -1,
        ease: Expo
      })
  
  }

firstPageAnime();


function MovemomentCursor() {
    // define default scale value
    var xscale = 1;
    var yscale = 1;
  
    var xprev = 0;
    var yprev = 0;
    
    window.addEventListener("mousemove", function (dets) {
      clearTimeout(timeout);
  
      xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
      yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);
  
      xprev = dets.clientX;
      yprev = dets.clientY;
      // console.log(xscale, yscale);
  
      circleMouseFollower(xscale, yscale);
  
      timeout = setTimeout(function () {
        cursor.style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(1, 1)`;
      }, 100);
    });
  }

  document.querySelector("#nav a").addEventListener("mousemove", function(){
    changeCursorShape();
  });

  document.querySelector("#nav a").addEventListener("mouseleave", function(){
    normalCursorShape();
  })

  document.querySelectorAll("#nav h4").forEach(function(change){
    change.addEventListener('mousemove', function(){
      // alert();
      changeCursorShape();
    });
    
    change.addEventListener('mouseleave', function(){
      // alert();
      normalCursorShape();
    });

  })
  
  document.querySelectorAll("#hero-footer a").forEach(function(change){
    change.addEventListener('mousemove', function(){
      // alert();
      changeCursorShape();
    
    });

    change.addEventListener('mouseleave', function(){
      // alert();
      normalCursorShape();
    
    });
  })
  
  function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      cursor.style.transform = `translate(${dets.clientX - 5}px, ${dets.clientY - 5}px) scale(${xscale}, ${yscale})`;
    });
  }
  
  MovemomentCursor();


  document.querySelectorAll(".elem").forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
  
    elem.addEventListener("mouseleave", function (dets) {
      normalCursorShape();
      cursor.style.mixBlendMode = "difference"
      cursor.innerHTML = ""
      gsap.to(elem.querySelector("img"), {
        opacity: 0,
        ease: Power3,
        duration: 0.5,
      });
      gsap.to(elem.querySelector("h1"), {
        opacity: 1
      })
      gsap.to(elem.querySelector("p"), {
        opacity: 1
      })
      gsap.to(elem.querySelector("h1"), {
        x: 0
      })
    });
    
    elem.addEventListener("mousemove", function (dets) {
      cursor.style.height = "70px";
      cursor.style.width = "70px";
      cursor.style.left = "-35px";
      cursor.style.top = "-53px";
      cursor.style.mixBlendMode = "normal"
      cursor.innerHTML = "<h3>View</h3>"


      var diff = dets.clientY - elem.getBoundingClientRect().top;
      diffrot = dets.clientX - rotate;
      rotate = dets.clientX;
      gsap.to(elem.querySelector("img"), {
        opacity: 1,
        ease: Power3,
        top: diff,
        left: dets.clientX,
        rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
      });
      gsap.to(elem.querySelector("p"), {
        opacity: 0.4
      })
      gsap.to(elem.querySelector("h1"), {
        opacity: 0.4
      })
      gsap.to(elem.querySelector("h1"), {
        x: 20,
        ease: Power3
      })
    });
  });

let contact = document.querySelector("#contact-me");
let skill = document.querySelector("#skills");
let project = document.querySelector("#projects");
let aboutMe = document.querySelector("#about-me");
let heading = document.querySelector("#heading");

function contactMe(){
  gsap.to(heading, {
    opacity: 0,
    display: "none",
    x: 10
    // ease: Power3,
  });
  gsap.to(skill, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(project, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(aboutMe, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(contact, {
    opacity: 1,
    display: "flex",
    delay: 0.5,
    duration: 1,
    ease: Expo.easeInOut
  })
}


function about_me(){
  gsap.to(heading, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(skill, {
    display: "none",
     opacity: 0,
    x: 10
  });
  gsap.to(project, {
    display: "none",
    opacity: 0,
    x: 10
    
  });
  gsap.to(contact, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(aboutMe, {
    opacity: 1,
    display: "block",
    delay: 0.5,
    duration: 1,
    ease: Expo.easeInOut
  })
}

function skls(){
  gsap.to(heading, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(contact, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(project, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(aboutMe, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(skill, {
    opacity: 1,
    display: "block",
    delay: 0.5,
    duration: 1,
    ease: Expo.easeInOut
  })
}

function pro(){
  gsap.to(heading, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(skill, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(contact, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(aboutMe, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(project, {
    opacity: 1,
    display: "block",
    delay: 0.5,
    duration: 1,
    ease: Expo.easeInOut
  })
}

function home(){
  gsap.to(project, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(skill, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(contact, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(aboutMe, {
    display: "none",
    opacity: 0,
    x: 10
  });
  gsap.to(heading, {
    opacity: 1,
    display: "block",
    delay: 0.5,
    duration: 1,
    ease: Expo.easeInOut
  })
}

document.querySelectorAll("#skills ul li").forEach(function(lan){

  lan.querySelector("h2").addEventListener("mouseenter",function(){

    changeCursorShape();
    
    gsap.to(lan.querySelector("#skills p"), {
      opacity: 1,
      duration: 0.4,
      ease: Power3
    })
    
  })

  lan.querySelector("h2").addEventListener("mouseleave",function(){

    normalCursorShape();
    
      gsap.to(lan.querySelector("#skills p"), {
        opacity: 0,
        ease: Power3,
        duration: 0.4
      })
    });
    
  });

document.querySelectorAll("#contact-me a").forEach(function(crs){
  crs.addEventListener("mouseenter", function(){
    changeCursorShape();
  });
  crs.addEventListener("mouseleave", function(){
    normalCursorShape();
  })
});
