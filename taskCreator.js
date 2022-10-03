import { HowManyItemsLeft, itemsLeft,} from "/buttons.js"
const input = document.getElementById("addInputBar")
const btn = document.querySelector(".add-input")
const toDoList = document.querySelector(".input-list")
let createDiv = document.createElement("div")
const check = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>`
let buttons = document.querySelectorAll(".btn-nocheck")

const createElements = () => {
    let createButton = document.createElement("button")
    let createSpan = document.createElement("span")
    let createCloseButton = document.createElement("button")
    createButton.classList.add("btn-nocheck")
    createSpan.classList.add("task-text")
    createSpan.innerText = input.value
    createCloseButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    createCloseButton.classList.add("close-btn")
    createDiv.classList.add("task-container")
    createDiv.appendChild(createButton)
    createDiv.appendChild(createSpan)
    createDiv.appendChild(createCloseButton)
}
function deleteButton() {
    let deleteBtn = document.querySelectorAll(".close-btn")
        deleteBtn.forEach(elem => {
            elem.addEventListener("click", function(){
            elem.closest(".task-container").remove()
            itemsLeft.innerText = `${document.querySelectorAll(".task-container").length} items left`
        })
})
}

function addStyles() {
    buttons = document.querySelectorAll(".btn-nocheck")
    let taskText = document.querySelectorAll(".task-text")
    buttons.forEach(button => {
        button.addEventListener("click", function () {
        button.innerHTML = check
        button.classList.add("btn-check")
        button.nextElementSibling.classList.add("text-check")
        button.closest(".task-container").classList.add("container-check")
    })
})
}
const createDivTest = () => {
    btn.addEventListener("click", function onClick(){
        if(input.value.length === 0) {
            alert("pls add some text")
        }
        else {     
            createDiv = document.createElement("div")
            toDoList.appendChild(createDiv)
            createElements()
            input.value = ""
            addStyles()
            deleteButton()
            itemsLeft.innerText = `${document.querySelectorAll(".task-container").length} items left`
            let completedList = document.querySelectorAll(".task-container")
            completedList.forEach(element => { element.style.display = "flex"})
        }   
    })
}
createDivTest()
addStyles()
HowManyItemsLeft()