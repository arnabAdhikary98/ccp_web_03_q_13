// Select elements
const colorInput = document.getElementById('colorInput');
const textInput = document.getElementById('textInput');
const bgButton = document.getElementById('bgButton');
const textButton = document.getElementById('textButton');
const myDiv = document.getElementById('myDiv');

// Function to check if a color string is valid
function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

// Event listener for changing background color
bgButton.addEventListener('click', () => {
    const color = colorInput.value.trim();
    if (isValidColor(color)) {
    myDiv.style.backgroundColor = color;
    } else {
    alert('Invalid color name!');
    }
});

// Event listener for updating text
textButton.addEventListener('click', () => {
    const text = textInput.value.trim();
    if (text === '') {
    alert('Please enter some text!');
    } else {
    myDiv.textContent = text;
    }
});