'use strict'

const toggle = document.getElementById('toggle');
const cardsContainer = document.getElementById('cards-container');
const toggleBox = document.getElementById('toggle-box');

toggle.addEventListener("click", function(){
    toggleBox.classList.toggle("toggle-active");
    cardsContainer.classList.toggle("anually");
    cardsContainer.classList.toggle("monthly");
});