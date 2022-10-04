import { HowManyItemsLeft, itemsLeft} from "/buttons.js"
// import { drag } from "/dragdrop.js"
const input = document.getElementById("addInputBar")
const btn = document.querySelector(".add-input")
const toDoList = document.querySelector(".input-list")
let createDiv = document.createElement("div")
const check = `<svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>`
let buttons = document.querySelectorAll(".btn-nocheck")

document.addEventListener("DOMContentLoaded", getTodos);


const createElements = (span) => {
    let createButton = document.createElement("button")
    let createSpan = document.createElement("span")
    let createCloseButton = document.createElement("button")
    createButton.classList.add("btn-nocheck")
    createSpan.classList.add("task-text")
    createSpan.innerText = span
    createCloseButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    createCloseButton.classList.add("close-btn")
    createDiv.classList.add("task-container")
    createDiv.setAttribute("draggable", true)
    createDiv.appendChild(createButton)
    createDiv.appendChild(createSpan)
    createDiv.appendChild(createCloseButton)
}
function deleteButton(e) {
    let deleteBtn = document.querySelectorAll(".close-btn")
    let taskText = document.querySelectorAll(".task-text")

        deleteBtn.forEach(elem => {
            elem.addEventListener("click", function(){
            elem.closest(".task-container").remove()
            itemsLeft.innerText = `${document.querySelectorAll(".task-container").length} items left`
            deleteLocalTodo(elem)
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
            saveLocalTodo(input.value)
            createDiv = document.createElement("div")
            toDoList.appendChild(createDiv)
            createElements(input.value)
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

///

function saveLocalTodo(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo) {
        createDiv = document.createElement("div")
        toDoList.appendChild(createDiv)
        createElements(todo)
        addStyles()
        deleteButton()
        itemsLeft.innerText = `${document.querySelectorAll(".task-container").length} items left`
        let completedList = document.querySelectorAll(".task-container")
        completedList.forEach(element => { element.style.display = "flex"})
    })
}

function deleteLocalTodo(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todo.parentElement.children[1].innerText
    
    if(todos.includes(todoText)) {
    todos = todos.filter(e => e !== todoText)
    // todos.splice(todos.lastIndexOf(todoText), 1)[0]
    }
  
    // console.log(todos)
    // console.log(newTodos)
   
    // console.log(todos.splice(todos.indexOf(todo[0].innerHTML), 1))
    localStorage.setItem("todos", JSON.stringify(todos));
}

