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
let itemID = 0;

//Balance total for budget - expense
const totalBalanceOutput = document.getElementById('total-balance-output');

// event listeners for budget button

budgetButton.addEventListener('click', () => { 

    budgetOutput.textContent =  Number(budgetInput.value);
    budgetInput.value="";
});


// Event listener for section three and four
expenseButton.addEventListener('click', () => { 
  
  // List items for expense name output
  const listItem= document.createElement("li");
  listItem.textContent= itemInput.value;
  itemOutput.append(listItem);

  
  // List items for amount output
  const listItemTwo= document.createElement("li");
  listItemTwo.textContent= `$${Number(amountInput.value)}`;
  amountOutput.append(listItemTwo);

  //Trash icon
  const trash=document.createElement("i");
  trash.className=("fas fa-trash-alt");
  trashIcon.append(trash);

  // Adding amounts to the expense array 
  expenseArray.push(Number(amountInput.value));

  totalExpense = expenseArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
    
  });

  totalExpenseOutput.textContent = Number(totalExpense);

  //totalBalanceOutput.textContent = Number(budgetOutput) - Number(totalExpenseOutput);
  let budgetTotal = Number(budgetOutput.textContent);
  let expenseTotal = Number(totalExpenseOutput.textContent);
  let result = budgetTotal - expenseTotal;

  totalBalanceOutput.textContent = result;
  // Add amount to object (not working - trying to refactor on separate branch)
    // let expenseObject = {
    //   id: itemID,
    //   title: itemInput.value,
    //   amount: amountInput.value,
    // };
    // itemID ++;

  // Event listener - delete line items and delete trash icon
 trash.addEventListener('click', () => { 
    trash.remove(); 
    listItem.remove();
    listItemTwo.remove();
  
    // Removing amounts from the expense array 
    expenseArray.pop(Number(listItemTwo.value));

    totalExpense = 0
    for (i=0; i<expenseArray.length; i++){
      totalExpense += expenseArray[i];
    }

    totalExpenseOutput.textContent = Number(totalExpense);
    let budgetTotal = Number(budgetOutput.textContent);
    let expenseTotal = Number(totalExpenseOutput.textContent);
    let result = budgetTotal - expenseTotal;

  totalBalanceOutput.textContent = result;
});

  // reset inputs to empty strings
  itemInput.value="";
  amountInput.value="";    

});









