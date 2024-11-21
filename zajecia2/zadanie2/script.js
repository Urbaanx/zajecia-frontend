const counterValue = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const changeColorButton = document.getElementById("changeColor");

incrementButton.addEventListener("click", () => {
    let val = parseInt(counterValue.textContent);
    counterValue.textContent = val + 1;
})

changeColorButton.addEventListener("click", () => {
    if(counterValue.style.color === "black"){
        counterValue.style.color = "red";
    }else{
        counterValue.style.color = "black";
    }
})