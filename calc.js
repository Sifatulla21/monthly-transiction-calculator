// calculate button click
document.getElementById('calculate').addEventListener('click', function(){
//input from income field
    const incomeField = document.getElementById('income');
    const income = incomeField.value;
// input from food field
    const foodCostField = document.getElementById('food-cost');
    const foodCost = foodCostField.value;
//input from rent field
    const rentCostField = document.getElementById('rent-cost');
    const rentCost = rentCostField.value;
//input from clothes field
    const clothesCostField = document.getElementById('clothes-cost');
    const clothesCost = clothesCostField.value;
//calculate total expense
    const totalExpence = parseFloat(foodCost) + parseFloat(rentCost) + parseFloat(clothesCost);
//show total expense    
    const totalExpenceShow = document.getElementById('total-expense');
    totalExpenceShow.innerText = totalExpence;
//calculate balance
    const balance = income - totalExpence;
//show balance
    const balanceShow = document.getElementById('balance');
    balanceShow.innerText = balance;
//validate balance and expence
    const invalidBalance = document.getElementById('invalid-balance');
    const errorBalance = document.getElementById('error-balance')
    if(income < totalExpence){
        errorBalance.style.display = 'none';
        invalidBalance.style.display = 'block';
    }
    else{
        errorBalance.style.display = 'block';
        invalidBalance.style.display = 'none';
    }
 })