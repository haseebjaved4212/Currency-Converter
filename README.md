
# Currency Converter

A small client-side currency converter web app that fetches live exchange rates from Exchangerate-API.

Files

- [index.html](index.html)
- [script.js](script.js) — contains [`API_KEY`](script.js), [`BASE_URL`](script.js), [`currencies`](script.js) and the [`convertCurrency`](script.js) function
- [style.css](style.css)

Quick start

1. Open [index.html](index.html) in your browser.
2. Enter an amount, choose the source and target currencies, then click "Convert".

Usage

- Enter a positive number in the Amount field.
- Select currencies from the dropdowns.
- Click Convert to see the result in the Result area.

How it works (brief)

- The UI is defined in [index.html](index.html) and styled via [style.css](style.css).
- Dropdowns are populated from the [`currencies`](script.js) array.
- Clicking the Convert button calls [`convertCurrency`](script.js), which requests the conversion from the API endpoint formed from [`BASE_URL`](script.js) and [`API_KEY`](script.js).
- The conversion follows the simple formula $converted = amount \times rate$. In the API response the already-calculated value is shown; conceptually:

$$
converted = amount \times rate
$$

Configuration

- Replace the value of [`API_KEY`](script.js) with your own Exchangerate-API key if needed.

Notes & troubleshooting

- If you get CORS or network errors, check your network and that the API key is valid.
- There is a small known issue in the error handling inside [`convertCurrency`](script.js); if you see a JavaScript error when a request fails, inspect the console for details and ensure the API response shape is handled correctly.

Example

- Convert 10 USD to EUR using the UI; the result will be displayed as:
  10 USD = 8.50 EUR (example)

License

- No license specified. Add one if you intend to share this project publicly.

## Preview 

- [Live Currency Converter](https://haseebjaved4212.github.io/Currency-Converter/)
