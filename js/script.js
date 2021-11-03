let form = document.querySelector(".js-form");
let currencyPLN = document.querySelector(".js-PLN");
let currency = document.querySelector(".js-chooseCurrency");
let exchangeRate = document.querySelector(".js-exchange");
let resultCurrencyValue = document.querySelector(".js-currencyValue");
let result = document.querySelector(".js-result");

currency.addEventListener("input", () => {

    switch (currency.value) {
        case " EUR ":
            exchangeRate.value = "4.57";
            break;

        case " USD ":
            exchangeRate.value = "3.79";
            break;

    };
});

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let PLN = currencyPLN.value;
        let rate = exchangeRate.value;

        let score = PLN / rate;

        result.innerText = score.toFixed(2);

        resultCurrencyValue.innerText = currency.value;
    });