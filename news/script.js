// var up = document.getElementById("up")
// var luxury = document.getElementById("luxury")

// up.addEventListener('click', upA)
// up.addEventListener("mouseup", upB);


// function upA () {
//     luxury.classList.add("up-ani");
// }

// function upB () {
//     luxury.classList.remove("right-ani");
// }


// up.addEventListener("click", function () {

//   if (luxury.classList.contains("up-ani")) {
//     luxury.classList.remove("up-ani");
//     // luxury.classList.add("up-ani");
//   } else {
//     luxury.classList.add("up-ani");
//   }

// });

var up = document.getElementById("up");
var left = document.getElementById("left");


up.addEventListener("click", function () {
 var slider = document.getElementsByClassName("slider-up")[0];

  if (slider.classList.contains("slide-down")) {
    slider.classList.remove("slide-down");
    // slider.classList.add("slide2");
  } else {
    slider.classList.add("slide-down");
  }

});

left.addEventListener("click", function () {
    var slider = document.getElementsByClassName("slider-left")[0];
   
     if (slider.classList.contains("slide-right")) {
       slider.classList.remove("slide-right");
       // slider.classList.add("slided2");
     } else {
       slider.classList.add("slide-right");
     }
   
   });

right.addEventListener("click", function () {
    var slider = document.getElementsByClassName("slider-right")[0];
   
     if (slider.classList.contains("slide-left")) {
       slider.classList.remove("slide-left");
       // slider.classList.add("slided2");
     } else {
       slider.classList.add("slide-left");
     }
   
   });

down.addEventListener("click", function () {
    var slider = document.getElementsByClassName("slider-down")[0];
   
     if (slider.classList.contains("slide-up")) {
       slider.classList.remove("slide-up");
       // slider.classList.add("slided2");
     } else {
       slider.classList.add("slide-up");
     }
   
   });