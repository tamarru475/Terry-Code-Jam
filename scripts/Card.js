const confCard = {
  cardTemplate: "#card-template",
  cardClass: ".card",
  cardTitleClass: ".card__title",
  cardImageClass: ".card__image",
  cardDescriptionClass: ".card__description",
};
class Card {
  constructor(data, template) {
    this._title = data.title;
    this._image = data.image;
    this._description = data.description;
    this._template = template;
    this._card = document
      .querySelector(this._template)
      .content.querySelector(confCard.cardClass)
      .cloneNode(true);
  }
  generateCard() {
    const cardTitle = this._card.querySelector(confCard.cardTitleClass);
    const cardImage = this._card.querySelector(confCard.cardImageClass);
    const cardDescription = this._card.querySelector(
      confCard.cardDescriptionClass
    );
    cardTitle.textContent = this._title;
    cardImage.src = this._image;
    cardDescription.textContent = this._description;
    return this._card;
  }
}

export { Card, confCard };
