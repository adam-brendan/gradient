let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
const button = document.getElementById("randomCol");

css.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

button.addEventListener("click", function() {
    let col1 = randomColor();
    let col2 = randomColor();
    body.style.background = "linear-gradient(to right, " + col1 + ", " + col2 + ")";
    css.textContent = "linear-gradient(to right, " + col1 + ", " + col2 + ")";
});


const setGradient = () => {
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
}

const randomColor = () => {
    let num1 = Math.floor(Math.random() * (256 - 0) + 0);
    let num2 = Math.floor(Math.random() * (256 - 0) + 0);
    let num3 = Math.floor(Math.random() * (256 - 0) + 0);
    return `rgb(${num1}, ${num2}, ${num3})`
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);