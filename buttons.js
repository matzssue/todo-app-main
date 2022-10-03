
export const all = document.querySelector(".btn-all")
const active = document.querySelector(".btn-active")
const completed = document.querySelector(".btn-completed")
const clear = document.querySelector(".btn-clear")
export const itemsLeft = document.querySelector(".items-left")


export const HowManyItemsLeft = (onClick) => {
    let itemsLength = document.querySelectorAll(".task-container")
    length = document.querySelectorAll(".task-container").length
    itemsLength.forEach(elem => {
        if(elem.style.display === "flex") {
        }
        else {
            length = length -1
        }
    })

    itemsLeft.innerText = `${length} items left`
}
    


clear.addEventListener("click", function onClick() {
    let completedList = document.querySelectorAll(".container-check")
    completedList.forEach(element => {
       element.remove()
    });
    HowManyItemsLeft()
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

    HowManyItemsLeft()
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
    HowManyItemsLeft()
})

 
all.addEventListener("click", function () {
    let completedList = document.querySelectorAll(".task-container")
    completedList.forEach(element => { element.style.display = "flex"
       
    });
    HowManyItemsLeft()
})


