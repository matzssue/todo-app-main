
const input = document.getElementById("addInputBar")
const btn = document.querySelector(".add-input")
const toDoList = document.querySelector(".input-list")
let createDiv = document.createElement("div")


const createElements = () => {
    let createButton = document.createElement("button")
    let createSpan = document.createElement("span")
    createButton.classList.add("btn-nocheck")
    createSpan.classList.add("task-text")
    createSpan.innerText = input.value
    createDiv.classList.add("task-container")
    createDiv.appendChild(createButton)
    createDiv.appendChild(createSpan)
}

const check = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>`





function addStyles() {
    buttons = document.querySelectorAll(".btn-nocheck")
    taskText = document.querySelectorAll(".task-text")
    buttons.forEach(button => {
        button.addEventListener("click", function () {
        button.innerHTML = check
        button.classList.add("btn-check")
        button.nextElementSibling.classList.add("text-check")

    })
})
}
const createDivTest = () => {
    btn.addEventListener("click", function(){
        createDiv = document.createElement("div")
        toDoList.appendChild(createDiv)
        createElements()
        input.value = ""
        addStyles()  

    })
    
}
createDivTest()

