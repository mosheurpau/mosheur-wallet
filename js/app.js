// income input convert number
function getIncomeAmount() {
    const incomeInput = document.getElementById('income-total');
    const incomeText = incomeInput.value;
    const incomeAmount = parseFloat(incomeInput.value);
    return incomeAmount;

}

// all expenses Input convert number
function getExpensesAmount(category) {
    const expensesInput = document.getElementById(category + '-expenses');
    const expensesText = expensesInput.value;
    const expensesAmount = parseFloat(expensesInput.value);
    return expensesAmount;
}

// sum all expenses
function getTotalExpenses() {
    const TotalExpenses = getExpensesAmount('food') + getExpensesAmount('rent') + getExpensesAmount('clothes');
    document.getElementById('expenses-total').innerText = TotalExpenses;
    return TotalExpenses;
}

// balance claculation
function getBalance() {
    const totalBalance = (getIncomeAmount() - getTotalExpenses()).toFixed(2);
    document.getElementById('balance-total').innerText = totalBalance;
    return totalBalance;
}

// saving and remain balance calculation
function savingCalculation() {
    const savingPercentage = document.getElementById('saving-percentage').value;
    savingPercentageNum = parseFloat(savingPercentage).toFixed(2);
    const balance = getIncomeAmount();

    // saving error handle
    if (savingPercentageNum >= 0) {
        const savingAmount = ((savingPercentageNum / 100) * balance).toFixed(2);
        const remainningBalance = getBalance() - savingAmount;
        if (remainningBalance >= 0) {
            document.getElementById('saving-amount').innerText = savingAmount;
            document.getElementById('remainning-balance').innerText = remainningBalance.toFixed(2);
            document.getElementById('saving-error').style.display = 'none';
        }
        else {
            document.getElementById('saving-error').innerText = "Your can't saving more then Balance.";
            document.getElementById('saving-error').style.display = 'block';
            document.getElementById('saving-error').style.color = 'red';
        }

    }
    else {
        document.getElementById('saving-error').innerText = "Plase enter positive number.";
        document.getElementById('saving-error').style.display = 'block';
        document.getElementById('saving-error').style.color = 'red';
    }


}

// handel calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    getIncomeAmount();
    getExpensesAmount('food');
    getExpensesAmount('rent');
    getExpensesAmount('clothes');
    // income input error handle 
    if (getIncomeAmount() < 0) {
        document.getElementById('income-error').innerText = 'Please enter positive number income amount';
        document.getElementById('income-error').style.display = 'block';
        document.getElementById('income-error').style.color = 'red';

        document.getElementById('food-error').style.display = 'none';
        document.getElementById('rent-error').style.display = 'none';
        document.getElementById('clothes-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'none';
    }

    // food input error handle 
    else if (getExpensesAmount('food') < 0) {
        document.getElementById('food-error').innerText = 'Please enter positive number food amount';
        document.getElementById('food-error').style.display = 'block';
        document.getElementById('food-error').style.color = 'red';

        document.getElementById('income-error').style.display = 'none';
        document.getElementById('rent-error').style.display = 'none';
        document.getElementById('clothes-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'none';
    }

    // rent input error handle 
    else if (getExpensesAmount('rent') < 0) {
        document.getElementById('rent-error').innerText = 'Please enter positive number rent amount';
        document.getElementById('rent-error').style.display = 'block';
        document.getElementById('rent-error').style.color = 'red';

        document.getElementById('income-error').style.display = 'none';
        document.getElementById('food-error').style.display = 'none';
        document.getElementById('clothes-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'none';

    }

    // clothes input error handle 
    else if (getExpensesAmount('clothes') < 0) {
        document.getElementById('clothes-error').innerText = 'Please enter positive number clothes amount';
        document.getElementById('clothes-error').style.display = 'block';
        document.getElementById('clothes-error').style.color = 'red';

        document.getElementById('income-error').style.display = 'none';
        document.getElementById('food-error').style.display = 'none';
        document.getElementById('rent-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'none';
    }

    //when no input error
    else if (getIncomeAmount() >= 0 && getExpensesAmount('food') >= 0 && getExpensesAmount('rent') >= 0 && getExpensesAmount('clothes') >= 0) {
        getTotalExpenses();
        getBalance();
        document.getElementById('income-error').style.display = 'none';
        document.getElementById('food-error').style.display = 'none';
        document.getElementById('rent-error').style.display = 'none';
        document.getElementById('clothes-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'none';


    }
    // All input string error handle 
    else {
        document.getElementById('income-error').style.display = 'none';
        document.getElementById('food-error').style.display = 'none';
        document.getElementById('rent-error').style.display = 'none';
        document.getElementById('clothes-error').style.display = 'none';
        document.getElementById('input-error').style.display = 'block';
        document.getElementById('input-error').style.color = 'red';
        document.getElementById('input-error').innerText = 'Please enter positive number amount';
    }
    // balance error handle
    if (getIncomeAmount() > getTotalExpenses()) {
        document.getElementById('balance-error').style.display = 'none';
        document.getElementById('saving-btn').addEventListener('click', function () {
            savingCalculation();
        });
    }
    else {
        document.getElementById('balance-error').innerText = "Your expenses more then your income amount. You can't saving mony.";
        document.getElementById('balance-error').style.display = 'block';
        document.getElementById('balance-error').style.color = 'red';

    }

});

