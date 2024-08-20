let light = document.getElementsByClassName("light")[0];
let dark = document.getElementsByClassName("dark")[0];
let body = document.querySelector("body");
let circle = document.querySelector(".circle");
let main = document.querySelector(".main");
body.style.transition = "background-color 0.6s";
main.style.transition = "box-shadow 0.6s";

light.addEventListener("click", () => {
  circle.style.transition = " all 0.6s";
  body.style.backgroundColor = "black";
  circle.style.transform = "translateX(88px)";
  circle.style.backgroundColor = "black";
  circle.style.boxShadow = "2px 2px 5px black";
  main.style.boxShadow = "2px 2px 5px white, -2px -2px 5px white";
});

dark.addEventListener("click", () => {
  circle.style.transition = " all 0.6s";
  body.style.backgroundColor = "white";
  circle.style.transform = "translateX(0px)";
  circle.style.backgroundColor = "white";
  circle.style.boxShadow = "2px 2px 5px white";
  main.style.boxShadow = "2px 2px 5px black, -2px -2px 5px black";
});
