function generateRandomNumber() {
    let randomNumber = Math.round(Math.random() * 100000);
    return randomNumber
}
function getRandomNumber() {
    let randomNumber = generateRandomNumber();
    randomNumberToStr = randomNumber.toString();
    if (randomNumberToStr.length === 4) {
        return randomNumber;
    } else {
        return getRandomNumber();
    }
}
function getInputValue(elementId) {
    return document.getElementById(elementId).value;
}
function setInputValueById(elementId, value) {
    return document.getElementById(elementId).value = value;
}
function displayValue(elementId, value) {
    document.getElementById(elementId).value += value;
}