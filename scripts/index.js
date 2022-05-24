import { Card, confCard } from "./Card.js";
const cardData = [
  {
    title: "Sci-Fi",
    image: "../images/Terry20items.png",
  },
  {
    title: "Dragon Ball Z",
    image: "../images/Terrysmile.png",
  },
  {
    title: " DJ",
    image: "../images/TerryBench.png",
  },
];
const cardSection = document.querySelector(".cards__container");
cardData.forEach((card) => {
  const newCard = new Card(card, confCard.cardTemplate);
  const cardElement = newCard.generateCard();
  cardSection.appendChild(cardElement);
});
