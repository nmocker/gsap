"use strict";var tl=gsap.timeline({repeat:2,yoyo:!0});tl.from(".logo",{duration:1.5,opacity:0,scale:.3,ease:"back"}),tl.to(".logo",{duration:1,rotation:360}),tl.from(".circle",{duration:1,opacity:0,y:"random(-200, 200)",stagger:.25}),tl.addLabel("circlesOutro","+=1"),tl.to(".circle",{duration:.5,opacity:0,x:300,ease:"power3.out"},"circlesOutro"),document.querySelector(".pause").onclick=function(){return tween.pause()},document.querySelector(".seek").onclick=function(){tween.seek(2),sequenceUpdateDragger()};
//# sourceMappingURL=main.js.map