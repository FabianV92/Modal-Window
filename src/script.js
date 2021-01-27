'use strict';

//declaring and initializing
let btn = document.querySelectorAll("button");
const closeIcon = document.querySelector(".fa-times");
const layer = document.querySelector(".layer");
const modalWindow = document.querySelector(".modal-window");

//open modal window function
const openModalWindow = function () {
    modalWindow.classList.remove("hidden");
    layer.classList.remove("hidden");
}

//pressing one of the buttons and open the modal window
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", openModalWindow);
}

//closing function to close modal window
const closeModalWindow = function () {
    modalWindow.classList.add("hidden");
    layer.classList.add("hidden");
}

//closing with the closeModalWindow function via press on close icon
//or press outside on the layer
layer.addEventListener("click", closeModalWindow);
closeIcon.addEventListener("click", closeModalWindow);

//press 'ESC' to close modal box if opened
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
        if (!modalWindow.classList.contains("hidden")) {
            closeModalWindow();
        }
    }
})