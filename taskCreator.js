const input = document.getElementById("addInputBar")
const btn = document.querySelector(".add-input")
const toDoList = document.querySelector(".input-list")
console.log(input)

const createElements = () => {
    let createButton = document.createElement("button")
    let createSpan = document.createElement("span")
    createButton.classList.add("btn-nocheck")
    createSpan.innerText = input.value
    createDiv.appendChild(createButton)
    createDiv.appendChild(createSpan)
}

const createDivTest = () => {
    btn.addEventListener("click", function(){
        createDiv = document.createElement("div")
        toDoList.appendChild(createDiv)
        createElements()
        input.value = ""
    })
}

createDivTest()
