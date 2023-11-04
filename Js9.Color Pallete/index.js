function createColorBox(color) {
    const colorBox = document.createElement('section');
    colorBox.style.backgroundColor = color;
    colorBox.style.width = "5vw";
    colorBox.style.height = "5vh";

    const rgbText = document.createElement('span');
    rgbText.textContent = color;

    const colorContainer = document.createElement('div');
    colorContainer.style.display = 'flex';
    colorContainer.style.alignItems = 'center';
    colorContainer.style.justifyContent = 'space-between';
    colorContainer.style.padding = '10px';
    colorContainer.style.width = '17vw';
    colorContainer.style.height = '10vh';
    colorContainer.style.backgroundColor = 'white';

    colorContainer.appendChild(colorBox);
    colorContainer.appendChild(rgbText);

    return colorContainer;
}

function isValidColorValue(value) {
    const intValue = parseInt(value, 10);
    return !isNaN(intValue) && intValue >= 0 && intValue <= 255;
}

function AddColor() {
    let red = document.getElementById("inputR").value;
    let green = document.getElementById("inputG").value;
    let blue = document.getElementById("inputB").value;


    if (isValidColorValue(red) && isValidColorValue(green) && isValidColorValue(blue)) {
        let colorsDiv = document.getElementById('ColorsDiv');
        colorsDiv.appendChild(createColorBox(`rgb(${red}, ${green}, ${blue})`));
    }
    else
        alert('Invalid color values. Please enter values between 0 and 255.');
}