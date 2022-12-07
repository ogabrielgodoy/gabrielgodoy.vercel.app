'use strict'

const switcher = document.querySelector(`.bt`);

switcher.addEventListener(`click`, function(){
    document.body.classList.toggle(`tema-escuro`)
});