// Récupérer le formulaire de donneur et le champ de code
const donorForm = document.getElementById("donor-form");
const codeInput = document.getElementById("code-input");

// Écouter l'événement de soumission du formulaire
donorForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Empêcher le rechargement de la page
  
  const code = codeInput.value; // Récupérer la valeur du champ de code
  
  // Vous pouvez ajouter ici la logique d'enregistrement du code dans la base de données
  
  // Exemple de logique : Afficher le code dans la console
  console.log("Code enregistré :", code);
  
  codeInput.value = ""; // Effacer le champ de code après soumission
});

// Récupérer le bouton de récupération et l'élément d'affichage du code
const retrieveButton = document.getElementById("retrieve-button");
const codeDisplay = document.getElementById("code-display");

// Écouter l'événement de clic sur le bouton de récupération
retrieveButton.addEventListener("click", function() {
  // Vous pouvez ajouter ici la logique de récupération d'un code depuis la base de données
  
  // Exemple de logique : Afficher un code de démonstration
  const retrievedCode = "ABCD1234";
  
  codeDisplay.textContent = retrievedCode; // Afficher le code récupéré dans l'élément d'affichage
});
 