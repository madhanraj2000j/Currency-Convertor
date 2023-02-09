// elements

const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");
const rateEl = document.getElementById("rate");

// btn
const swapBtnEl = document.getElementById("btn-swap");

// function
function currencyConvertor(){
  // getting values
  let currencyOne = currencyOneEl.value;
  let currencyTwo = currencyTwoEl.value;
  
  // fetching API
  fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
  .then((response) =>response.json())
  .then((data)=>{
    const rate = data.rates[currencyTwo];

    rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

    amountTwoEl.value = (amountOneEl.value *rate).toFixed(2);
  });
}

// eventlistener
currencyOneEl.addEventListener("change",currencyConvertor);
amountOneEl.addEventListener("input",currencyConvertor);
currencyTwoEl.addEventListener("change",currencyConvertor);
amountTwoEl.addEventListener("input",currencyConvertor);

swapBtnEl.addEventListener("click",() =>{
  let temp;
  temp = currencyOneEl.value;
  currencyOneEl.value = currencyTwoEl.value;
  currencyTwoEl.value = temp;

  currencyConvertor();
})

currencyConvertor();