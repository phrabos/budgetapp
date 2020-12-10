const budget= document.getElementById("budget-button");
const budgetInput= document.getElementById("budget-input");
const budgetOutput= document.getElementById("budget-output");


// event listeners for budget button

budget.addEventListener('click', () => { 

    budgetOutput.textContent =  Number(budgetInput.value)
});

const expense= document.getElementById("item");
const amount= document.getElementById("amount");
const button1= document.getElementById("button1");
const itemOutput= document.getElementById("expense-title");
const amountOutput= document.getElementById("expense-value");


button1.addEventListener('click', () => { 

  itemOutput.textContent = expense.value
  amountOutput.textContent = Number(amount.value)
});
