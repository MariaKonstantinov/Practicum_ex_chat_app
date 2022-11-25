import Card from "./Card.js";

export default class UserCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._text = data.text;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();

    this._element.querySelector(".card__paragraph").textContent = this._text;

    return this._element;
  }

  _handleMessageClick() {
    super._handleMessageClick();

    this._element.classList.toggle("card_is-active");
  }
}
