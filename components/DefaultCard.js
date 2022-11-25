import Card from "./Card.js";

export default class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._text = data.text;
    this._image = data.image;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__avatar").src = this._image;
    this._element.querySelector(".card__paragraph").textContent = this._text;

    return this._element;
  }
}
