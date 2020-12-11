const budget= document.getElementById("budget-button");
const budgetInput= document.getElementById("budget-input");
const budgetOutput= document.getElementById("budget-output");

const expense= document.getElementById("item");
const amount= document.getElementById("amount");
const button1= document.getElementById("button1");
const itemOutput= document.getElementById("expense-title");
const amountOutput= document.getElementById("expense-value");

const checkboxSection =document.getElementById('checkbox-section');

// event listeners for budget button

budget.addEventListener('click', () => { 

    budgetOutput.textContent =  Number(budgetInput.value)
});




button1.addEventListener('click', () => { 
  
  //itemOutput.textContent = expense.value;
  //amountOutput.textContent = Number(amount.value);
  const listItem= document.createElement("li");
  listItem.textContent= expense.value;
  itemOutput.appendChild(listItem);

  const listItemTwo= document.createElement("li");
  listItemTwo.textContent= Number(amount.value);
  amountOutput.appendChild(listItemTwo);

  const checkbox= document.createElement("input");
  checkbox.type= "checkbox";
  checkbox.className="checkbox"
  checkboxSection.appendChild(checkbox);


});









