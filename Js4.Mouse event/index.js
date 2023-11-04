const block1 = document.getElementById("block1");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const mainBlock = document.getElementById("mainBlock");

const mainBlockColor =mainBlock.style.backgroundColor;



block1.addEventListener("mouseover", () => {
    const block1Style = window.getComputedStyle(block1);
    mainBlock.style.backgroundColor = block1Style.backgroundColor;
});

block2.addEventListener("mouseover", () => {
    const block2Style = window.getComputedStyle(block2);
    mainBlock.style.backgroundColor = block2Style.backgroundColor;
});

block3.addEventListener("mouseover", () => {
    const block3Style = window.getComputedStyle(block3);
    mainBlock.style.backgroundColor = block3Style.backgroundColor;
});

block1.addEventListener("mouseout", () => {
    mainBlock.style.backgroundColor =mainBlockColor;
});

block2.addEventListener("mouseout", () => {
    mainBlock.style.backgroundColor =mainBlockColor;
});

block3.addEventListener("mouseout", () => {
    mainBlock.style.backgroundColor =mainBlockColor;
});