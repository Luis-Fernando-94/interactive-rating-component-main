const buttons = document.getElementsByClassName("btn");

let number = { value: null };

document.addEventListener("DOMContentLoaded", () => {

    

})

function elementSelected(element) {

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].value != element.value) {
            buttons[i].style.backgroundColor = "hsl(213, 19%, 18%)";
            buttons[i].style.color = "hsl(217, 12%, 63%)";
        } else {
            element.style.backgroundColor = "hsl(217, 12%, 63%)";
            element.style.color = "#fff";
        }
    }
        
    return number.value = element.value;

}