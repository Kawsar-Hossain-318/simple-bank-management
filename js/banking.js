// account management of deposit here start here
document.getElementById('deposit-btn').addEventListener('click', function(){
    // get the amount from deposit input 
    const depositInput = document.getElementById('deposit-amount');
    const depositAmount = depositInput.value;
    
    //update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const currentDepositAmount = depositTotal.innerText;
    const newUpdateAmount = parseFloat(currentDepositAmount) + parseFloat(depositAmount);
    depositTotal.innerText = newUpdateAmount;

    // clear the input field of deposit
    depositInput.value = '';

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const newTotalBalance = parseFloat(depositAmount) + parseFloat(balanceTotalText);
    balanceTotal.innerText = newTotalBalance;

});

// account management of withdraw here start here
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // get the amount from withdraw input
    const withdrwaInput = document.getElementById('withdraw-amount'); 
    const withdrawAmount = withdrwaInput.value;
    const newWithdrawAmountConvert = parseFloat(withdrawAmount);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawConvert = parseFloat(withdrawTotalText);
    const newWithdrawAmount = newWithdrawAmountConvert + withdrawConvert;
    withdrawTotal.innerText = newWithdrawAmount;

    // clear the input field of withdraw
    withdrwaInput.value = '';

    // update the account balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalconvert = parseFloat(balanceTotalText);
    const newTotalBalance = balanceTotalconvert - withdrawAmount;
    balanceTotal.innerText = newTotalBalance;

});