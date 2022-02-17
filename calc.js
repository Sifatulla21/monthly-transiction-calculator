//function for take input and validation    
    function inputAndValidation(inputId, invalidId){
    const invalidMessageShow = document.getElementById(invalidId);
//input from income field
    const field = document.getElementById(inputId);
    const value = field.value;
    if(value > 0){
        invalidMessageShow.style.display = 'none';
        return value;
    }
    else if(value < 0){
        invalidMessageShow.style.display = 'block';
    }
    else if(typeof value == 'string'){
        invalidMessageShow.style.display = 'block';
    }
}
// calculate button click
document.getElementById('calculate').addEventListener('click', function(){
//input from income field
    const income = inputAndValidation('income', 'invalid-income');
// input from food field
    const foodCost = inputAndValidation('food-cost', 'invalid-food');
//input from rent field
    const rentCost = inputAndValidation('rent-cost', 'invalid-rental');
//input from clothes field
    const clothesCost = inputAndValidation('clothes-cost', 'invalid-clothes');
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
//validate inputs

 });

 //saving button click
document.getElementById('saving-button').addEventListener('click', function(){
//get value from income field    
    // const incomeField = document.getElementById('income');
    // const incomeSaving = incomeField.value;
    const incomeSaving = inputAndValidation('income', 'invalid-income')
//get value from balance    
    const balanceText = document.getElementById('balance');
    const balanceTextSaving = balanceText.innerText;
//saving value
    const savingField =  document.getElementById('saving-field');
    const saving = savingField.value;
//calculate saving amount
    const totalSavingAmount = (parseFloat(incomeSaving) / 100) * parseFloat(saving);
//show saving amount
    const savingAmountShow = document.getElementById('saving-amount');
    savingAmountShow.innerText = totalSavingAmount;
//calculate remaining balance
    const remainingBalance = parseFloat(balanceTextSaving) - parseFloat(totalSavingAmount);
//Show remaining balance
    const remainingBalanceShow = document.getElementById('remaining-balance');
    remainingBalanceShow.innerText = remainingBalance;
//validate saving and remaining balance
    const invalidtotalSavingAmount = document.getElementById('invalid-remaining-balance');
    const invalidbalanceTextSaving = document.getElementById('remaining-amount-invalid');
    if(remainingBalance < 0){
        invalidtotalSavingAmount.style.display = 'block';
        invalidbalanceTextSaving.style.display = 'none';
    }
    else{
        invalidtotalSavingAmount.style.display = 'none';
        invalidbalanceTextSaving.style.display = 'block';
    }
//validate saving input
    const invalidSaving = document.getElementById('invalid-saving');
    const savingAmountInvalid = document.getElementById('saving-amount-invalid');
    if(saving > 0){
        savingAmountInvalid.style.display = 'block';
        invalidSaving.style.display = 'none';
    }
    else if(saving < 0){
        savingAmountInvalid.style.display = 'none';
        invalidSaving.style.display = 'block';
    }
    else if(typeof saving == 'string'){
        savingAmountInvalid.style.display = 'none';
        invalidSaving.style.display = 'block';
    }


 })