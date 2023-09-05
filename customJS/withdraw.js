
document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const newWithdrawString = withdrawInputField.value;
    const newWithdraw = parseFloat(newWithdrawString);

    const withdrawAmmount = document.getElementById('withdraw-ammount');
    const previousWithdrawString = withdrawAmmount.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);

    const currentWithdraw = previousWithdraw + newWithdraw;
    withdrawAmmount.innerText = currentWithdraw;

    // balance
    const balanceField = document.getElementById('balance-field');
    const previousBalanceString = balanceField.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = previousBalance - newWithdraw;

    balanceField.innerText = currentBalance;

    withdrawInputField.value = '';
})