// Retrieve the donor form and code input field
const donorForm = document.getElementById("donor-form");
const codeInput = document.getElementById("code-input");

// Listen for the form submission event
donorForm.addEventListener("submit", function(event) {
event.preventDefault(); // Prevent page reload

const code = codeInput.value; // Retrieve the value from the code input field

// You can add your code logic here to save the code in the database

// Example logic: Display the code in the console
console.log("Saved code:", code);

codeInput.value = ""; // Clear the code input field after submission
});

// Retrieve the retrieve button and code display element
const retrieveButton = document.getElementById("retrieve-button");
const codeDisplay = document.getElementById("code-display");

// Listen for the click event on the retrieve button
retrieveButton.addEventListener("click", function() {
// You can add your code logic here to retrieve a code from the database

// Example logic: Display a demo code
const retrievedCode = "ABCD1234";

codeDisplay.textContent = retrievedCode; // Display the retrieved code in the code display element
});
