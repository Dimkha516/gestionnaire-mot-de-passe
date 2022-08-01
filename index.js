const minData = "azertyuiopqsdfghjklmwxcvbn";
const majData = minData.toUpperCase();
const numbData = "0123456789";
const caractData = "!:.?(),é_@";

const passDisplay = document.getElementById("password-display");
const passLevel = document.getElementById("password-level");
const passOutput = document.getElementById("password-output");
const min = document.getElementById("min");
const maj = document.getElementById("maj");
const numb = document.getElementById("numb");
const caract = document.getElementById("caract");
const generateBtn = document.getElementById("generate-button");

const data = [];
let password = "";

const shuffleArray = (tableau) => {
  tableau.sort(() => Math.random() - 0.5);
};

function generatePassword() {
  min.checked ? data.push(...minData) : null;

  maj.checked ? data.push(...majData) : null;

  numb.checked ? data.push(...numbData) : null;

  caract.checked ? data.push(...caractData) : null;

  if (data.length === 0) {
    alert("Vous devez choisir au moins un critère !");
    return;
  } else {
    shuffleArray(data);
  }

  for (data.length; data.length > passLevel.value - 1; data.length--) {
    password = data.join("-");
  }
  passDisplay.textContent = password;
  generateBtn.textContent = "SUCCES !";

  setTimeout(() => {
    generateBtn.textContent = "Générer mot de passe";
  }, 2500);
}

generateBtn.addEventListener("click", () => {
  generatePassword();
});
