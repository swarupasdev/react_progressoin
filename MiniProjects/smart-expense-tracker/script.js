let expenses = [];

const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const addBtn = document.getElementById("addExBtn");
const list = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

addBtn.addEventListener("click", function () {
    addExpense();
});

function addExpense() {
    const title = titleInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;

    if (title === "" || isNaN(amount) || amount <= 0) {
        alert("Enter valid data");
        return;
    }

    const expense = {
        id: Date.now(),
        title: title,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    renderExpenses();
    clearInputs();
}

function renderExpenses() {
    list.innerHTML = "";

    expenses.forEach(function (exp) {
        const li = document.createElement("li");

        li.innerHTML = `
      ${exp.title} - ₹${exp.amount} (${exp.category})
      <button onclick="deleteExpense(${exp.id})">X</button>
    `;

        list.appendChild(li);
    });

    calculateTotal();
}

function calculateTotal() {
    let total = 0;

    expenses.forEach(function (exp) {
        total += exp.amount;
    });

    totalDisplay.textContent = total;
}

function clearInputs() {
    titleInput.value = "";
    amountInput.value = "";
}

function deleteExpense(id) {
    expenses = expenses.filter(function (exp) {
        return exp.id !== id;
    });

    renderExpenses();
}