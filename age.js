const birthDateInput = document.getElementById('birthDate');
const calculAgeButton = document.getElementById('calculAgeButton');
const ageResult = document.getElementById('ageResult');

calculAgeButton.addEventListener('click', () => {
    const nbMs = new Date() - birthDateInput.valueAsDate;
    const age = Math.floor(nbMs / (1000 * 60 * 60 * 24 * 365.25));
    ageResult.textContent = `Votre age : ${age}`
});