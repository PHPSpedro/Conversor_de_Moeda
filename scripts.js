const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".select-currency");

function convertValues() {
  const inputValue = document.querySelector(".input-currency").value;
  const valueToCovert = document.querySelector(".currency-value-to-convert");
  const valueCoverted = document.querySelector(".currency-value");

  const dolarToday = 5.25;
  const euroToday = 5.6; // Example value, you can update it as needed

  if (currencySelect.value == "dolar") {
    valueCoverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputValue / dolarToday);
  }
  if (currencySelect.value == "euro") {
    valueCoverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputValue / euroToday);
  }

  valueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  console.log(convertedValue);
}

function changeCurrency() {
  const currencyName = document.querySelector("#currency-name");
  const currencyImage = document.querySelector(".currency-img");
  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImage.src = "assets/dolar.png";
  }
  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "assets/euro.png";
  }
  convertValues() 
}
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
