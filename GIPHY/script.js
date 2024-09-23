let input = document.querySelector(".search input");
let button = document.querySelector(".search button");
let container = document.querySelector(".container");
let inputValue;

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value === "") {
    alert("Please enter a search term");
    return false; // 
  }
  inputValue = input.value;
  let url = `http://api.giphy.com/v1/gifs/search?q=${inputValue}&api_key=VDMcskLceqVCp1RqhMOjVUtL2ZAgABCu&limit=100`;
  fetchGiphy(url);
  container.innerHTML = "";
});

let fetchGiphy = async (url) => {
  let response = await fetch(url);
  let result = await response.json();
  let gifs = result.data;
  gifs.forEach((gif) => {
    let url = gif.images.fixed_height.url;
    let img = document.createElement("img");
    img.src = url;
    container.appendChild(img);
  });
};
