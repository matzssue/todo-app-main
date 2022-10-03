const all = document.querySelector(".btn-all")
const active = document.querySelector(".btn-active")
const completed = document.querySelector(".btn-completed")
const clear = document.querySelector(".btn-clear")


clear.addEventListener("click", function onClick() {
    let completedList = document.querySelectorAll(".container-check")
    completedList.forEach(element => {
       element.remove()
    });
   
})

completed.addEventListener("click", function onClick(){
    let allBtns = document.querySelectorAll(".btn-nocheck")
    allBtns.forEach(elem => {
        elem.closest(".task-container").style.display = "flex"
        if(elem.classList.contains("btn-check")) {
        }
        else{elem.closest(".task-container").style.display = "none"}
}
    )
})

active.addEventListener("click", function onClick(){
    let allBtns = document.querySelectorAll(".btn-nocheck")
    allBtns.forEach(elem => {
        elem.closest(".task-container").style.display = "flex"
        if(elem.classList.contains("btn-check")) {
            elem.closest(".task-container").style.display = "none"
        }
        else{}
}
    )
})

all.addEventListener("click", function onClick() {
    let completedList = document.querySelectorAll(".task-container")
    completedList.forEach(element => { element.style.display = "flex"
       
    });
   
})