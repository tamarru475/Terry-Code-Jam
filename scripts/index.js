import { Card, confCard } from "./Card.js";

// Creating cards
const cardData = [
  {
    id: 1,
    title: "Sci-Fi",
    image: "../images/Terry20items.png",
  },
  {
    id: 2,
    title: "Dragon Ball Z",
    image: "../images/Terrysmile.png",
  },
  {
    id: 3,
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
//Creating cards

const popupsData = [
  {
    id: 1,
    title: "Hello World1",
    video: "",
    caption: "Hello World",
  },
  {
    id: 2,
    title: "Hello World2",
    video: "",
    caption: "Hello World",
  },
  {
    id: 3,
    title: "Hello World3",
    video: "",
    caption: "Hello World",
  },
];
//Creating popups
//Creating popups
