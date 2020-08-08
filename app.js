let costOfMeal = document.getElementById('cost-of-meal');
let tipPercent = document.getElementById('tip-percent');
let totalAmount = document.getElementById('total-amount');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click', function() {
    priceOfMeal = Number(costOfMeal.value);
    yourTip = Number(tipPercent.value);

    let mealTotal = (yourTip/100)*(priceOfMeal) + (priceOfMeal);
    let roundTotal = Math.round(mealTotal * 100) / 100;


    document.getElementById('total-amount').innerHTML = "$" + roundTotal;

});