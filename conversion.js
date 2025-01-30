const inputBaseAmount = document.getElementById('inputBaseAmount');
const convertButton = document.getElementById('convertButton');
const convertResult = document.getElementById('convertResult');

convertButton.addEventListener('click', () => {
    const baseAmount = inputBaseAmount.valueAsNumber;

    const dollar = (baseAmount * 1.04).toFixed(2);
    const yen = (baseAmount * 161.64).toFixed(2);
    const rouble = (baseAmount * 102.5).toFixed(2);

    convertResult.append(`Dollar: ${dollar}`);
    convertResult.append(document.createElement('br'));
    convertResult.append(`Yen: ${yen}`);
    convertResult.append(document.createElement('br'));
    convertResult.append(`Rouble: ${rouble}`);
});