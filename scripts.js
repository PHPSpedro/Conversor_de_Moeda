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
  }

  valueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputValue);

  console.log(convertedValue);
}

convertButton.addEventListener("click", convertValues);
