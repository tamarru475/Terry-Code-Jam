import { openPopup, closePopup } from "./utils.js";
const confCard = {
  cardTemplate: "#card-template",
  cardClass: ".card",
  cardTitleClass: ".card__title",
  cardImageClass: ".card__image",
  cardDescriptionClass: ".card__description",
  cardButton: ".card__button",
};
// export const popup = document.querySelector(".popup__overlay");
class Card {
  constructor(data, template) {
    this._title = data.title;
    this._image = data.image;
    this._id = data.id;
    this._template = template;
    this._card = document
      .querySelector(this._template)
      .content.querySelector(confCard.cardClass)
      .cloneNode(true);
    this._cardButton = this._card.querySelector(confCard.cardButton);
  }
  _openPopup() {
    const popup = document.querySelector(`.${this._cardButton.id}`);
    openPopup(popup);
  }
  generateCard() {
    const cardTitle = this._card.querySelector(confCard.cardTitleClass);
    const cardImage = this._card.querySelector(confCard.cardImageClass);
    this._cardButton.addEventListener("click", () => {
      this._openPopup();
    });
    this._cardButton.id = this._id;
    cardTitle.textContent = this._title;
    cardImage.src = this._image;
    return this._card;
  }
}

export { Card, confCard };
