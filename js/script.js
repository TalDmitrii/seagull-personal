var link = document.querySelector(".j-button-buy");
var popup = document.querySelector(".j-modal");
var btnClose = popup.querySelector(".j-modal-close");


link.addEventListener("click", function(){
    popup.style.display = "block";
});

// Для пробы:
// link.addEventListener("click", function(){
//     // evt.preventDefault();
//     // console.dir(popup);
//     popup.classList.add("modal-show");
// });

btnClose.addEventListener("click", function(){
    popup.style.display = "none";
});

// Это не заработало, на все кнопки
// var link = document.querySelectorAll(".j-button-buy");
// var popup = document.querySelector(".j-modal");
// var btnClose = popup.querySelector(".j-modal-close");


// link.addEventListenerAll("click", function(){
//     popup.style.display = "block";
// });