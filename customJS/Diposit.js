
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



