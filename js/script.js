const nameInput = document.getElementById("nameInput");
const utangInput = document.getElementById("utangInput");
const saveButton = document.getElementById("saveButton");
const utangList = document.getElementById("nakautangs");
const emptyMessage = document.getElementById("empty-message");


// Check if the list is empty
function checkEmptyList() {
  if (utangList.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}


// Run when page loads
checkEmptyList();


// When Save button is clicked
saveButton.addEventListener("click", function() {
  // Get values from inputs
  const name = nameInput.value.trim();
  const amount = utangInput.value.trim();
 
  // Check if values are valid
  if (name === "" || amount === "") {
    alert("Please enter both name and amount!");
    return;
  }
 
  // Format the amount
  const peso = parseFloat(amount).toFixed(2);
 
  // Create new item
  const newItem = document.createElement("li");
  newItem.className = "utang-item";
 
  // Create debt info div
  const debtInfo = document.createElement("div");
 
  // Add name span
  const nameSpan = document.createElement("span");
  nameSpan.className = "debt-name";
  nameSpan.textContent = name;
 
  // Add amount span
  const amountSpan = document.createElement("span");
  amountSpan.className = "debt-amount";
  amountSpan.textContent = "₱" + peso;
 
  // Add spans to debt info
  debtInfo.appendChild(nameSpan);
  debtInfo.appendChild(document.createElement("br"));
  debtInfo.appendChild(amountSpan);
 
  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-button";
  deleteBtn.textContent = "Delete";
 
  // Make delete button work
  deleteBtn.addEventListener("click", function() {
    utangList.removeChild(newItem);
    checkEmptyList();
  });
 
  // Add everything to the list item
  newItem.appendChild(debtInfo);
  newItem.appendChild(deleteBtn);
 
  // Add item to the list
  utangList.appendChild(newItem);
 
  // Update empty message
  checkEmptyList();
 
  // Clear form
  nameInput.value = "";
  utangInput.value = "";
  nameInput.focus();
});


// Make Enter key work for inputs
nameInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    utangInput.focus();
  }
});


utangInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    saveButton.click();
  }
});