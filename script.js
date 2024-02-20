function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
       ./images/ezgif-frame-001.png
       ./images/ezgif-frame-002.png
       ./images/ezgif-frame-003.png
       ./images/ezgif-frame-004.png
       ./images/ezgif-frame-005.png
       ./images/ezgif-frame-006.png
       ./images/ezgif-frame-007.png
       ./images/ezgif-frame-008.png
       ./images/ezgif-frame-009.png
       ./images/ezgif-frame-010.png
       ./images/ezgif-frame-011.png
       ./images/ezgif-frame-012.png
       ./images/ezgif-frame-013.png
       ./images/ezgif-frame-014.png
       ./images/ezgif-frame-015.png
       ./images/ezgif-frame-016.png
       ./images/ezgif-frame-017.png
       ./images/ezgif-frame-018.png
       ./images/ezgif-frame-019.png
       ./images/ezgif-frame-020.png
       ./images/ezgif-frame-021.png
       ./images/ezgif-frame-022.png
       ./images/ezgif-frame-023.png
       ./images/ezgif-frame-024.png
       ./images/ezgif-frame-025.png
       ./images/ezgif-frame-026.png
       ./images/ezgif-frame-027.png
       ./images/ezgif-frame-028.png
       ./images/ezgif-frame-029.png
       ./images/ezgif-frame-030.png
       ./images/ezgif-frame-030.png
       ./images/ezgif-frame-031.png
       ./images/ezgif-frame-032.png
       ./images/ezgif-frame-033.png
       ./images/ezgif-frame-034.png
       ./images/ezgif-frame-035.png
       ./images/ezgif-frame-036.png
       ./images/ezgif-frame-037.png
       ./images/ezgif-frame-038.png
       ./images/ezgif-frame-039.png
       ./images/ezgif-frame-040.png
       ./images/ezgif-frame-041.png
       ./images/ezgif-frame-042.png
       ./images/ezgif-frame-043.png
       ./images/ezgif-frame-044.png
       ./images/ezgif-frame-045.png
       ./images/ezgif-frame-046.png
       ./images/ezgif-frame-047.png
       ./images/ezgif-frame-048.png
       ./images/ezgif-frame-049.png
       ./images/ezgif-frame-050.png
       ./images/ezgif-frame-051.png
       ./images/ezgif-frame-052.png
       ./images/ezgif-frame-053.png
       ./images/ezgif-frame-054.png
       ./images/ezgif-frame-055.png
       ./images/ezgif-frame-056.png
       ./images/ezgif-frame-057.png
       ./images/ezgif-frame-058.png
       ./images/ezgif-frame-059.png
       ./images/ezgif-frame-060.png
       ./images/ezgif-frame-061.png
       ./images/ezgif-frame-062.png
       ./images/ezgif-frame-063.png
       ./images/ezgif-frame-064.png
       ./images/ezgif-frame-065.png
       ./images/ezgif-frame-066.png
       ./images/ezgif-frame-067.png
       ./images/ezgif-frame-068.png
       ./images/ezgif-frame-069.png
       ./images/ezgif-frame-070.png
       ./images/ezgif-frame-071.png
       ./images/ezgif-frame-072.png
       ./images/ezgif-frame-073.png
       ./images/ezgif-frame-074.png
       ./images/ezgif-frame-075.png
       ./images/ezgif-frame-076.png
       ./images/ezgif-frame-077.png
       ./images/ezgif-frame-078.png
       ./images/ezgif-frame-079.png
       ./images/ezgif-frame-080.png
       ./images/ezgif-frame-081.png
       ./images/ezgif-frame-082.png
       ./images/ezgif-frame-083.png
       ./images/ezgif-frame-084.png
       ./images/ezgif-frame-085.png
       ./images/ezgif-frame-086.png
       ./images/ezgif-frame-087.png
       ./images/ezgif-frame-088.png
       ./images/ezgif-frame-089.png
       ./images/ezgif-frame-090.png
       ./images/ezgif-frame-091.png
       ./images/ezgif-frame-092.png
       ./images/ezgif-frame-093.png
       ./images/ezgif-frame-094.png
       ./images/ezgif-frame-095.png
       ./images/ezgif-frame-096.png
       ./images/ezgif-frame-097.png
       ./images/ezgif-frame-098.png
       ./images/ezgif-frame-099.png
       ./images/ezgif-frame100.png
       ./images/ezgif-frame-101.png
       ./images/ezgif-frame-102.png
       ./images/ezgif-frame-103.png
       ./images/ezgif-frame-104.png
       ./images/ezgif-frame-105.png
       ./images/ezgif-frame-106.png
       ./images/ezgif-frame-107.png
       ./images/ezgif-frame-108.png
       ./images/ezgif-frame-109.png
       ./images/ezgif-frame-110.png
       ./images/ezgif-frame-111.png
       ./images/ezgif-frame-112.png
       ./images/ezgif-frame-113.png
       ./images/ezgif-frame-114.png
       ./images/ezgif-frame-115.png
       ./images/ezgif-frame-116.png
       ./images/ezgif-frame-117.png
       ./images/ezgif-frame-118.png
       ./images/ezgif-frame-119.png
       ./images/ezgif-frame-120.png
       ./images/ezgif-frame-121.png

   `;
    return data.split("\n")[index];
  }
  
  const frameCount = 300;
  
  const images = [];
  const imageSeq = {
    frame: 1,
  };
  
  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  
  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#page>canvas`,
      start: `top top`,
      end: `600% top`,
      scroller: `#main`,
    },
    onUpdate: render,
  });
  
  images[1].onload = render;
  
  function render() {
    scaleImage(images[imageSeq.frame], context);
  }
  
  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerShift_x,
      centerShift_y,
      img.width * ratio,
      img.height * ratio
    );
  }
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: true,
    // markers:true,
    scroller: `#main`,
    start: `top top`,
    end: `600% top`,
  });
  
  
  
  gsap.to("#page1",{
    scrollTrigger:{
      trigger:`#page1`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page2",{
    scrollTrigger:{
      trigger:`#page2`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })
  gsap.to("#page3",{
    scrollTrigger:{
      trigger:`#page3`,
      start:`top top`,
      end:`bottom top`,
      pin:true,
      scroller:`#main`
    }
  })

  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });

  document.onkeydown = (e) => {
    if (e.key == 123) {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'I') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'C') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'J') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.key == 'U') {
        e.preventDefault();
    }
    if (e.ctrlKey && e.shiftKey && e.key == 'i') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'c') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == 'h') {
      e.preventDefault();
  }
  if (e.ctrlKey && e.key == 'u') {
      e.preventDefault();
  }
};