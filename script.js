const greenButton = document.getElementById('yesButton');
const redButton = document.getElementById('noButton');
let clickCount = 0;

const texts = [
"¿Estás seguro?",
"¿No queres pensarlo otra vez?",
"Te estoy preguntando de nuevo.",
"POR FAVOR PENSALO BIEN"
];

redButton.addEventListener('click', () => {
if (clickCount < texts.length) {
redButton.textContent = texts[clickCount];
}

clickCount++;

if (clickCount === 5) {
redButton.remove();
greenButton.textContent = "Sí, obvio ❤️❤️❤️";
}else {
const currentSize = window.getComputedStyle(greenButton).
getPropertyValue( 'font-size');
const newSize = parseFloat(currentSize) * 1.5;
greenButton.style.fontSize = newSize + 'px';
}
});

greenButton.addEventListener('click', () => {
greenButton.innerHTML = "❤️";
redButton.remove();
greenButton.style.fontSize = "3em";
});