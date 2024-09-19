let selects = document.querySelectorAll("select");
let url =
  "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

let swap = document.querySelector(".exchange-icon i");

let btn = document.querySelector("button");
// Iterate over each select element
selects.forEach((select) => {
  // Set all the currency codes in the select element
  for (let currencyCode in countryList) {
    let option = document.createElement("option");
    option.innerText = currencyCode;
    option.value = currencyCode; // Set the value property
    select.appendChild(option);
  }

  // Add event listener to the select element
  select.addEventListener("change", (e) => {
    let currentValue = e.target.value; // Use value instead of innerText
    let countryName = countryList[currentValue]; // Get the country name
    let parentElement = select.parentElement;
    let imageElement = parentElement.firstElementChild;
    imageElement.src = `https://flagsapi.com/${countryName}/flat/24.png`;
  });
});

let updateExchangeRate = async () => {
  let input = document.querySelector("input");
  let amount = input.value;
  let output = document.querySelector(".result span");
  let country = document.querySelectorAll("select");
  let fromCountry = country[0].value.toLowerCase();
  let toCountry = country[1].value.toLowerCase();
  let newURL = `${url}/${fromCountry}.json`;

  if (amount == "" || amount < 1) {
    amount = 1;
    input.value = 1;
  }
  let fetchRate = async () => {
    let response = await fetch(newURL);
    let data = await response.json();
    let rate = data[fromCountry][toCountry];
    let total = rate * amount;
    output.innerText = `${amount} ${fromCountry.toUpperCase()} = ${total.toFixed(3)} ${toCountry.toUpperCase()}`;
  };
  fetchRate();
};

btn.addEventListener("click", () => {
  updateExchangeRate();
});

window.addEventListener("load", (e) => {
  updateExchangeRate();
});

swap.addEventListener("click", () => {
  let from = document.querySelector(".from ").lastElementChild;
  let fromImg = from.firstElementChild; // url
  let fromImgUrl = fromImg.src;
  let fromCountry = from.lastElementChild;
  let fromCountryValue = fromCountry.value;
  let to = document.querySelector(".to").lastElementChild;
  let toImg = to.firstElementChild;
  let toImgUrl = toImg.src;
  let toCountry = to.lastElementChild;
  let toCountryValue = toCountry.value;

  let tempImg = fromImgUrl;
  fromImgUrl = toImgUrl;
  toImgUrl = tempImg;

  let tempCountry = fromCountryValue;
  fromCountryValue = toCountryValue;
  toCountryValue = tempCountry;

  //swap
  fromImg.src = fromImgUrl;
  toImg.src = toImgUrl;

  fromCountry.value = fromCountryValue;
  toCountry.value = toCountryValue;

  updateExchangeRate();
});
