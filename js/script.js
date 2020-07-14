var buttonopen = document.querySelector(".button-open");
var popup = document.querySelector(".contact-us");
var close = popup.querySelector(".button-close");
var form = popup.querySelector(".contact-form");
var namefield = popup.querySelector(".name-input");
var emailfield = popup.querySelector(".email-input");
var textfield = popup.querySelector(".contact-textarea");

var mapopen = document.querySelector(".map");
var mappopup = document.querySelector(".big-map");
var mapclose = document.querySelector(".button-close-map");

var isStorageSupport = true;
var storagename = "";
var storageemail = "";

try {
    storagename = localStorage.getItem("namefield");
    storageemail = localStorage.getItem("emailfield");
} catch (err) {
    isStorageSupport = false;
}

buttonopen.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("contact-us-open");

    if (storagename) {
        namefield.value = storagename;
        textfield.focus();
    } else {
        namefield.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("contact-us-open");
    popup.classList.remove("for-error");
});

form.addEventListener("submit", function (evt) {
    if (!namefield.value || !emailfield.value || !textfield.value) {
        evt.preventDefault();
        console.log("Заполните все поля");
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("for-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("namefield", namefield.value);
            localStorage.setItem("emailfield", emailfield.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup && popup.classList.contains("contact-us-open")) {
            evt.preventDefault();
            popup.classList.remove("contact-us-open");
            popup.classList.remove("for-error");
        }
    }
});

mapopen.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.add("big-map-open");
});

mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mappopup.classList.remove("big-map-open");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (mappopup && mappopup.classList.contains("big-map-open")) {
            evt.preventDefault();
            mappopup.classList.remove("big-map-open");
        }
    }
});