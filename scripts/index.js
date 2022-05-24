import { Card, confCard } from "./Card.js";
const cardData = [
  {
    title: "Hello World !",
    image: "../images/Terry20items.png",
    description: "Description",
  },
  {
    title: "Hello World !",
    image: "../images/Terry20items.png",
    description: "Description",
  },
  {
    title: "Hello World !",
    image: "../images/Terry20items.png",
    description: "Description",
  },
];
const cardSection = document.querySelector(".cards__container");
cardData.forEach((card) => {
  const newCard = new Card(card, confCard.cardTemplate);
  const cardElement = newCard.generateCard();
  cardSection.appendChild(cardElement);
});
