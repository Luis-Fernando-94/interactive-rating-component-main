const buttons = document.querySelectorAll("#buttons input");
const submit = document.querySelector("#submit");

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

    submit.removeAttribute("disabled");
        
    return number.value = element.value;

}

function sendSorted() {

    const card_1 = document.getElementById("card-1");
    const card_2 = document.getElementById("card-2");
    const info = document.getElementsByClassName("info")[0];

    if (number.value != null) {

        card_1.style.display = "none";
        card_2.style.display = "flex";

        info.innerText += ` ${number.value} out of 5`;

    }

}