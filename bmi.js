// DOM elements
// pour récupérer les valeurs
const heightInput = document.getElementById('heightInput'); 
const weightInput = document.getElementById('weightInput');
// pour ajouter un événement click
const calculateButton = document.getElementById('calculateButton');
// pour afficher mon résultat
const resultDiv = document.getElementById('result');

const fn = () => {
    // poids / (tailleEnMetre * tailleEnMetre
    const w = weightInput.valueAsNumber;
    const h = heightInput.valueAsNumber / 100;
    const bmi = w / h**2;
    resultDiv.textContent = `Votre BMI est ${bmi.toFixed(2)}`;
}

calculateButton.addEventListener('click', 
    // fonction qui sera éxécutée au click
    () => {
        // poids / (tailleEnMetre * tailleEnMetre
        const w = weightInput.valueAsNumber;
        const h = heightInput.valueAsNumber / 100;
        const bmi = w / h**2;
        resultDiv.textContent = `Votre BMI est ${bmi.toFixed(2)}`;
    }
);