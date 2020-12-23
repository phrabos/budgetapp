const budgetInput= document.getElementById("budget-input");
const budgetOutput= document.getElementById("budget-output");
const itemInput= document.getElementById("item");
const itemOutput= document.getElementById("expense-title");
const amountInput= document.getElementById("amount");
const amountOutput= document.getElementById("expense-value");

export function budgetFunc() {
    budgetOutput.textContent =  Number(budgetInput.value);
    budgetInput.value="";
}