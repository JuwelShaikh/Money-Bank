
// input field of Diposit
document.getElementById('btn-diposit').addEventListener('click',function(){
    const inputFieldOne = document.getElementById('input-id-one');
    const newDipositString = inputFieldOne.value;
    const newDiposit = parseFloat(newDipositString);
    
    const dipositElement = document.getElementById('diposit');
    const previousDipositString = dipositElement.innerText;
    const previousDiposit = parseFloat(previousDipositString);
    
    const currentDiposit = previousDiposit + newDiposit;
    
    dipositElement.innerText = currentDiposit;
    
    // balance
    const balanceField = document.getElementById('balance-field');
    const newBalanceFieldString= balanceField.innerText;
    const newBalance = parseFloat(newBalanceFieldString);
    const currentBalance = newDiposit + newBalance;

    balanceField.innerText = currentBalance;

    inputFieldOne.value = '';

})


// input field of Withdraw
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const inputFieldTwo = document.getElementById('input-id-two');
    const newWithdrawalString = inputFieldTwo.value;
    const newWithdraw = parseFloat(newWithdrawalString);
    
    const withdrawElement = document.getElementById('withdraw');
    const previousWithdrawalString = withdrawElement.innerText;
    const previousWithdrawal = parseFloat(previousWithdrawalString);

    const currentWithdraw = previousWithdrawal + newWithdraw;

    withdrawElement.innerText = currentWithdraw;
    
    inputFieldTwo.value = '';
})
