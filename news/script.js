var up = document.getElementById("up")
var luxury = document.getElementById("luxury")

up.addEventListener('mousedown', upA)
up.addEventListener("mouseup", upB);


function upA () {
    luxury.classList.add("right-ani");
}

function upB () {
    luxury.classList.remove("right-ani");
}