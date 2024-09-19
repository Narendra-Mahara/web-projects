let ele = document.getElementsByClassName("element")[0];
let input = document.getElementsByTagName("input")[0];
ele.style.display = "flex";
ele.style.flexWrap = "wrap";

const fetchCountry = async () => {
  let response = await fetch("https://restcountries.com/v3.1/all");
  let data = await response.json();
  continent = data.map((element) => element.region);
  data.forEach((element) => {
    var country = document.createElement("img");
    let cntDesc = document.createElement("p");
    var div = document.createElement("div");

    country.src = `${element.flags.svg}`;
    country.style.width = "200px";
    country.style.height = "200px";
    country.style.objectFit = "contain"; // Ensures the image covers the area without distortion
    country.style.margin = "10px";
    country.style.filter = "drop-shadow(5px 5px 5px grey)";
    cntDesc.innerHTML = `${element.name.common}`;
    cntDesc.style.textAlign = "center";
    cntDesc.style.fontWeight = "bold";
    cntDesc.style.fontSize = "25px";
    cntDesc.style.color = "black";
    cntDesc.style.margin = "10px";
    div.style.width = "300px";
    div.style.height = "400px";
    div.style.border = "1px solid black";
    div.style.borderRadius = "10px";
    div.style.boxShadow = "5px 5px 5px grey";
    div.style.margin = "10px";
    div.style.display = "flex";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    ele.appendChild(div);
    div.appendChild(country);
    div.appendChild(cntDesc);
  });
};

fetchCountry();

input.addEventListener("input", (e) => {
  e.preventDefault();
  const searchValue = input.value.toLowerCase();
  const countryDivs = document.querySelectorAll(".element > div"); // Select all the divs inside the element class
  countryDivs.forEach((div) => {
    const countryName = div.querySelector("p").textContent.toLowerCase();
    if (!countryName.includes(searchValue)) {
      div.style.display = "none";
    } else {
      div.style.display = "flex";
    }
  });
});

