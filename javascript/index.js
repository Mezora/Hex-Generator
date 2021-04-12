const hexComponent = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const colorButton = document.getElementById('colorButton');
const actualColor = document.getElementById('main-color');

const generateRandomColor = () => {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        console.log(hexColor);
        hexColor = hexColor + hexComponent[getRandomNumber()];
    }
    actualColor.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

colorButton.addEventListener('click', generateRandomColor);

const getRandomNumber = () => {
    return Math.floor(Math.random() * hexComponent.length);
}