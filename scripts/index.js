import { Card, confCard } from "./Card.js";
const cardData = [
  {
    title: "Hello World !",
    image: "Link",
    description: "Description",
  },
  {
    title: "Hello World !",
    image: "Link",
    description: "Description",
  },
];
const cardSection = document.querySelector(".cards");
cardData.forEach((card) => {
  const newCard = new Card(card, confCard.cardTemplate);
  const cardElement = newCard.generateCard();
  cardSection.appendChild(cardElement);
});
