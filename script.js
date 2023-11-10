const button = document.querySelector("button");


button.onclick = () => {
    const red = document.querySelector("input:first-child");
    const green = document.querySelector("input:nth-child(2)");
    const blue = document.querySelector("input:last-of-type");
    const circle = document.querySelector(".circle");

    circle.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
}
