const expandableList = document.getElementById("expandableList");
const input = document.getElementById("newElementValue");
const addElementForm = document.getElementById("addElementForm");

addElementForm.addEventListener("submit", (e) => {
    e.preventDefault();
    var li = document.createElement("li");
    li.innerText = input.value;
    expandableList.appendChild(li);
})