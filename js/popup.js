let popup = document.getElementById('my__popup'),
    popupToggle = document.getElementById('open__feedback'),
    popupClose = document.querySelector('.popup__close');

    popupToggle.onclick = function() {
        popup.style.visibility = "visible";
    };
    popupClose.onclick = function() {
        popup.style.visibility = "hidden";
    };

    window.onclick = function(e) {
        if(e.target == popup) {
            popup.style.visibility = "hidden";
        }
    };