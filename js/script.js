var popup = document.querySelector(".j-modal");
var btnClose = popup.querySelector(".j-modal-close");
var cardsList = document.querySelector(".j-list-card");

// Функция вызывается для закрытия попапа при нажатии на крестик
var closePopupOnBtn = function() {
    closePopup();
}

// Функция вызывается для закрытия попапа при нажатии на кнопку ESC
var closePopupOnEscPress = function(e) {
    if (e.keyCode === 27) {
        closePopup();
    }
}

// Общая функция закрытия попапа.
// Скрывает попап стилями и удаляет ненужные обработчики событий.
var closePopup = function() {
    popup.style.display = "none";
    btnClose.removeEventListener("click", closePopupOnBtn);
    window.removeEventListener("keydown", closePopupOnEscPress);
}

// Делегирование.
// Вместо того, чтобы добавлять обработчик события на каждый элемент,
// добавляем только один обработчик на общий контейнер.
cardsList.addEventListener("click", function(e) {
    // Если при клике на контейнер, мы попадаем в кнопку - то показываем попап, 
    // и добавляем два обработчика событий для закрытия попапа.
    if (e.target.classList.contains('j-button-buy')) {
        popup.style.display = "block";
        
        // один для событий с клавиатуры
        window.addEventListener("keydown", closePopupOnEscPress);
        // второй при клике на крестик
        btnClose.addEventListener("click", closePopupOnBtn);
    }
});

// var links = document.querySelectorAll(".j-button-buy");

// Foreach
// links.forEach(function(elem) {
//     elem.addEventListener("click", function(){
//         popup.style.display = "block";
        
//         btnClose.addEventListener("click", closePopup);
//     });
// });
