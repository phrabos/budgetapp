
const budgetInput= document.getElementById("budget-input");
const budgetOutput= document.getElementById("budget-output");
const itemInput= document.getElementById("item");
const itemOutput= document.getElementById("expense-title");
const amountInput= document.getElementById("amount");
const amountOutput= document.getElementById("expense-value");
const totalExpenseOutput = document.getElementById('total-expense-output');
const totalBalanceOutput = document.getElementById('total-balance-output');
let expenseArray = [];
let totalExpense = 0;
// Budget Button Variables
const budgetButton= document.getElementById("budget-button");
const expenseButton= document.getElementById("expense-button");
const trashIcon= document.getElementById('trash-can');

// functions
function calcBalance(){
  //totalBalanceOutput.textContent = Number(budgetOutput) - Number(totalExpenseOutput);
  let budgetTotal = Number(budgetOutput.textContent);
  let expenseTotal = Number(totalExpenseOutput.textContent);
  let result = budgetTotal - expenseTotal;

  totalBalanceOutput.textContent = result;
};

function calcExpenses(){
  totalExpenseOutput.textContent = Number(totalExpense);
};

function budgetFunc() {
  budgetOutput.textContent =  Number(budgetInput.value);
  budgetInput.value="";  
};

function addToExpenseList(){
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

  trash.addEventListener('click', () => { 
    trash.remove(); 
    listItem.remove();
    listItemTwo.remove();
    

    // Removing amounts from the expense array 
    expenseArray.pop(Number(listItemTwo.value));

    totalExpense = 0
    for (i=0; i<expenseArray.length; i++){
      totalExpense += expenseArray[i];
    };
    calcExpenses();
  });
  
};

function addToExpenseArray() {
  //Adding amounts to the expense array 
expenseArray.push(Number(amountInput.value));

totalExpense = 0
    for (i=0; i<expenseArray.length; i++){
      totalExpense += expenseArray[i];
    };
    calcExpenses();
};


  // Add amount to object (not working - trying to refactor on separate branch)
    let expenseObject = {
      id: 11111,
      title: itemInput.value,
      amount: amountInput.value,
    };
    expenseObject.id ++;



// event listeners for budget button

budgetButton.addEventListener('click', () => { 
  budgetFunc();
  calcBalance();
});


// Event listener for section three and four
expenseButton.addEventListener('click', () => { 
  addToExpenseList();
  addToExpenseArray();
  calcBalance();

  // reset inputs to empty strings
  itemInput.value="";
  amountInput.value="";  
});



  





