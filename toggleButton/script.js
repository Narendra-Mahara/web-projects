let light = document.getElementsByClassName("light")[0];
let dark = document.getElementsByClassName("dark")[0];
let hidden = document.getElementsByClassName("hidden")[0];

light.addEventListener("click", () => {
  light.classList.add("hidden");
  dark.classList.remove("hidden");
});

dark.addEventListener("click", () => {
  dark.classList.add("hidden");
  light.classList.remove("hidden");
});
