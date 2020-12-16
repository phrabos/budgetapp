// Budget Button Variables
const budgetButton= document.getElementById("budget-button");
const budgetInput= document.getElementById("budget-input");
const budgetOutput= document.getElementById("budget-output");

// Expense Button Variables
const itemInput= document.getElementById("item");
const amountInput= document.getElementById("amount");
const expenseButton= document.getElementById("expense-button");
const itemOutput= document.getElementById("expense-title");
const amountOutput= document.getElementById("expense-value");

// Checkbox variable used to append new input element
const checkboxSection =document.getElementById('checkbox-section');

//Trash icon variables
const trashIcon= document.getElementById('trash-can');
const deleteTrash = document.querySelector(".fa-trash-alt");

// Array to total all expense for expenses section
const expenseArray = [];
let totalExpense = 0
const totalExpenseOutput = document.getElementById('total-expense-output');

//Balance total for budget - expense
const totalBalanceOutput = document.getElementById('total-balance-output');

// event listeners for budget button

budgetButton.addEventListener('click', () => { 

    budgetOutput.textContent =  Number(budgetInput.value);
});


// Event listener for section three and four
expenseButton.addEventListener('click', () => { 
  
  // List items for expense name output
  const listItem= document.createElement("li");
  listItem.textContent= itemInput.value;
  itemOutput.appendChild(listItem);

  
  // List items for amount output
  const listItemTwo= document.createElement("li");
  listItemTwo.textContent= `$${Number(amountInput.value)}`;
  amountOutput.appendChild(listItemTwo);

  // Checkbox 
  // const checkbox= document.createElement("input");
  // checkbox.type= "checkbox";
  // checkbox.className="checkbox";
  // checkboxSection.appendChild(checkbox);

  //Trash icon
  const trash=document.createElement("i");
  trash.className=("fas fa-trash-alt");
  trashIcon.appendChild(trash);

  // Adding amounts to the expense array 
  expenseArray.push(Number(amountInput.value));

  totalExpense = expenseArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
    
  });

  totalExpenseOutput.textContent = Number(totalExpense);

  //totalBalanceOutput.textContent = Number(budgetOutput) - Number(totalExpenseOutput);
  const budgetTotal = Number(budgetOutput.textContent);
  const expenseTotal = Number(totalExpenseOutput.textContent);
  const result = budgetTotal - expenseTotal;

  totalBalanceOutput.textContent = result;

  

});

// Event listener - delete line items and trash icon
// deleteTrash.addEventListener('click', () => { 
//   itemOutput.remove();
  
  
//    });







