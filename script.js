const buttons = document.querySelectorAll("#buttons input");

let number = { value: null };

document.addEventListener("DOMContentLoaded", () => {

    

})

function elementSelected(element) {

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].value != element.value) {
            buttons[i].removeAttribute("class");
        } else {
            element.setAttribute("class", "active");
        }
    }
        
    return number.value = element.value;

}