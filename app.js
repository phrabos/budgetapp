const budget= document.getElementById("budget-button");
const budgetInput= document.getElementById("budget-input");
const budgetOutput= document.getElementById("budget-output");

const expense= document.getElementById("item");
const amount= document.getElementById("amount");
const button1= document.getElementById("button1");
const itemOutput= document.getElementById("expense-title");
const amountOutput= document.getElementById("expense-value");

const checkboxSection =document.getElementById('checkbox-section');

//Trash icon variables
const trashIcon= document.getElementById('trash-can');
const deleteTrash = document.getElementById('deleteTrash');

// Array to total all expense for expenses section
const expenseArray = [];
let totalExpense = 0
const totalExpenseOutput = document.getElementById('total-expense-output');

//Balance total for budget - expense
const totalBalanceOutput = document.getElementById('total-balance-output');

// event listeners for budget button

budget.addEventListener('click', () => { 

    budgetOutput.textContent =  Number(budgetInput.value)
});


// Event listener for section three and four
button1.addEventListener('click', () => { 
  
  // List items for expense type
  //itemOutput.textContent = expense.value;
  //amountOutput.textContent = Number(amount.value);
  const listItem= document.createElement("li");
  listItem.textContent= expense.value;
  itemOutput.appendChild(listItem);
  
  // List items for amount input
  const listItemTwo= document.createElement("li");
  listItemTwo.textContent= Number(amount.value);
  amountOutput.appendChild(listItemTwo);

  // Checkbox 
  const checkbox= document.createElement("input");
  checkbox.type= "checkbox";
  checkbox.className="checkbox";
  checkboxSection.appendChild(checkbox);

  //Trash icon
  const trash=document.createElement("i");
  trash.className="far fa-trash-alt";
  trash.id = 'deleteTrash';
  trashIcon.appendChild(trash);

  // Adding amounts to the expense array 
  expenseArray.push(Number(amount.value));
  totalExpense = expenseArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
    
  });

  totalExpenseOutput.textContent = totalExpense

  //totalBalanceOutput.innerText = Number(budgetOutput) - Number(totalExpenseOutput);
  const budgetTotal = Number(budgetOutput.innerText);
  const expenseTotal = Number(totalExpenseOutput.innerText);
  const result = budgetTotal - expenseTotal;

  totalBalanceOutput.innerText = result;

});



// // Delete line items and trash icon event listener
// deleteTrash.addEventListener('click', () => { 
// document.removeChild('itemOutput');

// console.log("test")

// });





