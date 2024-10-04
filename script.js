// animations
const sheryEffect = ()=>{
  Shery.mouseFollower();
  Shery.makeMagnet(".magnet")
  
  Shery.imageEffect(".c1img", {
    style: 2, 
    // debug: true, 
    config: 
        {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":1},"modeA":{"value":0},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    ,
    preset: "./presets/wigglewobble.json",
  });
  Shery.imageEffect(".p2img", {
    style: 3, 
    // debug: true, 
    config: 
        {"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":1},"modeA":{"value":0},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":1},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    ,
    preset: "./presets/wigglewobble.json",
  });
  
}
sheryEffect()
let mn = gsap.matchMedia();
mn.add("(min-width:800px)",()=>{
  // desktop
  gsap.from(".p1content",{
    opacity:0,
    scale:0 ,
    duration:2,
    stagger:1
})
  gsap.from(".page2head", {
      scale:0,
      opacity :0,
      ease: Power1,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 60%",
        end: "top 70%",
      //   markers:true,
        scrub: 1,
      },
    })
    gsap.from(".p2content .p2left img", {
      
      opacity :0,
      ease: Power1,
      duration:2,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 80%",
        end: "top 70%",
      //   markers:true,
        scrub: 1,
      },
    })
    gsap.from(".p2content .p2right", {
     
      opacity :0,
      duration:2,
      ease: Power1,
      scrollTrigger: {
        trigger: "#page2",
        start: "top 80%",
        end: "top 50%",
      //   markers:true,
        scrub: 1,
      },
    })
    gsap.to("#page3 h1",{
      transform:"translateX(-100%)",
      color:"blue",
      
      duration:10,
      scrollTrigger: {
          trigger: "#page3",
          start: "top 0%",
          end: "top -100%",
          pin:true,
        //  markers:true,
          scrub: 4,
        },
    })
    
    var tl = gsap.timeline({scrollTrigger:{
      trigger:"#page4",
      // markers:true,
      start:"50% 50%",
      end:"100% 50%",
      scrub:2,
      pin:true
    }});
    tl.to("#page4 .top",{
    transform:"translateY(-100%)"
    },'h')
    tl.to("#page4 .bottom",{
      transform:"translateY(100%)"
    },'h')
    tl.to("#page4 .top-h",{
      
      opacity:0,
    },'h')
    tl.to("#page4 .bottom-h",{
      opacity:0
    },'h')
    tl.to("#page4 .center .content",{
      marginTop:"0%"
    },'h')
    var tl1 = gsap.timeline({scrollTrigger:{
      trigger:"#footer",
      // markers:true,
      start:"top 90%",
      end:"top 30%",
      scrub:2,
      
    }});
    tl1.from("#footer .upper .contact h1",{
      opacity:0,
      
      scale:0
    })
    tl1.from("#footer .upper .contact ul",{
      x:"-30%",
      opacity:0,
    })
    tl1.from("#footer .lower .lc h1",{
      x:"-100%",
      opacity:0,
    })
    gsap.from(".s1 .sh h1 span",{
      scale:0,
      opacity:0,
      duration:2,
      stagger:0.2
    })
    gsap.from(".c1 .ch h1 span",{
      scale:0,
      opacity:0,
      duration:2,
      stagger:0.2
    })
})

