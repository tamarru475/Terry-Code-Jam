import { Card, confCard } from "./Card.js";
import { closePopup } from "./utils.js";

// Creating cards
const cardData = [
  {
    id: "sci-fi",
    title: "Sci-Fi",
    image: "https://tamarru475.github.io/images/terry20items.png/",
  },
  {
    id: "dragon-ball",
    title: "Dragon Ball Z",
    image: "../images/terrysmile.png",
  },
  {
    id: "dj",
    title: " DJ",
    image: "../images/terryBench.png",
  },
];
const cardSection = document.querySelector(".cards__container");
cardData.forEach((card) => {
  const newCard = new Card(card, confCard.cardTemplate);
  const cardElement = newCard.generateCard();
  cardSection.appendChild(cardElement);
});
//Creating cards

//Close popups on a specific id
const closeButtons = [...document.querySelectorAll(".popup__close-button")];
closeButtons.forEach((button) => {
  const popup = document.querySelector(`.${button.id}`);
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});
//Close popups on a specific id
/// Imports ///

import togglePopup from "./utils.js";

//// Popup Modles ///
const navPopup = document.querySelector(".popup__nav");

/// Buttons ///

const menuButton = document.querySelector(".nav__menu-button");

/// Event Listeners ///

menuButton.addEventListener("click", () => {
  togglePopup(navPopup);
});
