// Card class has a visual representation, stores the markup of card instances, and attaches event listeners to them. This class has two subclasses: UserCard and DefaultCard which are stored in separate files respectively. The Card, DefaultCard, and UserCard classes are components, which have their own visual representation and provide markup for the Section class.

export default class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  _setEventListeners() {
    this._element.querySelector(".card__text").addEventListener("click", () => {
      this._handleMessageClick();
    });
  }

  _handleMessageClick() {
    this._element
      .querySelector(".card__text")
      .classList.toggle("card__text_is-active");
  }
}
