let label = document.querySelector(".wrapper label");
let input = document.querySelector(".wrapper label input");

label.addEventListener("dragover", (e) => {
  e.preventDefault();
  label.style.backgroundColor = "#dfdfdf";
});

label.addEventListener("dragleave", (e) => {
  label.style.backgroundColor = "#fff";
});

label.addEventListener("drop", (e) => {
  e.preventDefault();
  preview(e.dataTransfer.files[0]);
});

input.addEventListener("change", (e) => {
  preview(e.target.files[0]);
});

let preview = (file) => {
  let url = URL.createObjectURL(file);
  label.style.background = `url(${url})`;
  label.style.backgroundSize = "cover";
  label.style.backgroundPosition = "center";
  label.style.backgroundRepeat = "no-repeat";
  label.style.border = "none";
  label.textContent = "";
};
