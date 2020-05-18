// gsap.to(".logo", {
//   duration: 2,
//   x: 300,
//   backgroundColor: "#560563",
//   borderRadius: "20%",
//   border: "5px solid red",
//   ease: "elastic",
// });

// gsap.set(".logo, polygon", { transformOrigin: "50% 50%" });
// gsap.to(".logo, polygon", { duration: 20, rotation: 360 });

// var myObject = { rotation: 0 };
// gsap.to(myObject, {
//   duration: 20,
//   rotation: 360,
//   onUpdate: function () {
//     console.log(myObject.rotation);
//   },
// });

// .from & staggering
var tl = gsap.timeline({ repeat: 2, yoyo: true });

tl.from(".logo", { duration: 1.5, opacity: 0, scale: 0.3, ease: "back" });
tl.to(".logo", { duration: 1, rotation: 360 });
tl.from(".circle", {
  duration: 1,
  opacity: 0,
  y: "random(-200, 200)",
  stagger: 0.25,
});
tl.addLabel("circlesOutro", "+=1");
tl.to(
  ".circle",
  { duration: 0.5, opacity: 0, x: 300, ease: "power3.out" },
  "circlesOutro"
);

document.querySelector(".pause").onclick = () => tween.pause();
document.querySelector(".seek").onclick = () => {
  tween.seek(2);
  sequenceUpdateDragger();
};
