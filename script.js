const API_KEY = "55619fec1b15422b34ebd0dc";
const BASE_URL = "https://v6.exchangerate-api.com/v6";

// Currency codes for popular currencies
const currencies = [
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "INR",
  "NZD",
  "PKR",
];

// Get DOM elements
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

// Populate currency dropdowns
function populateDropdowns() {
  currencies.forEach((currency) => {
    fromCurrency.add(new Option(currency, currency));
    toCurrency.add(new Option(currency, currency));
  });
  // Set default values
  fromCurrency.value = "USD";
  toCurrency.value = "EUR";
}

// Convert currency
async function convertCurrency() {
  try {
    const amountValue = amount.value;
    if (!amountValue || amountValue <= 0) {
      result.textContent = "Please enter a valid amount";
      return;
    }

    const response = await fetch(
      `${BASE_URL}/${API_KEY}/pair/${fromCurrency.value}/${toCurrency.value}/${amountValue}`
    );
    const data = await response.json();

    if (data.result === "success") {
      const convertedAmount = data.conversion_result.toFixed(2);
      result.textContent = `${amountValue} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value}`;
    } else {
      throw new Error(data.error - type || "Conversion failed");
    }
  } catch (error) {
    console.error("Conversion error:", error);
    result.textContent = "Error fetching exchange rate. Please try again.";
  }
}

// Event listeners
convertBtn.addEventListener("click", convertCurrency);
window.addEventListener("load", populateDropdowns);
