// we have a constructor function which takes a single argument - an object - with a property called { formSelector }

// 1. We create a class that stores the form markup - "SubmitForm"

// We pass the selector of the form template element to the form class constructor

class SubmitForm {
  constructor({ formSelector }) {
    this._formSelector = formSelector;
  }

  //   2. copying method for returning card markup - _getTemplate method from Card.js and replacing all "card" instances in elements with "form" instances

  // we need a function to generate an HTML element from this template; for this we need to look to a subclass of our Card class; so we copy it from UserCard.js; and making changes to it by renaming it; also we don't need a "super" class to reference here as _getTemplate and _setEventListeners functions will be inside the SubmitForm class -> thus we change both instances of "super" class to "this"; removed testContent property as we don't need it here.

  _getTemplate() {
    const formElement = document
      .querySelector(this._formSelector)
      .content.querySelector(".form")
      .cloneNode(true);
    return formElement;
  }

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      //   preventing default behavior of browser
      evt.preventDefault();
      //   resetting the form after submission
      this._element.reset();
    });
  }

  // We need to create a public method in the SubmitForm class for returning the markup for our HTML. We'll name it generateForm()
  generateForm() {
    this._element = this._getTemplate(); // create an element
    this._setEventListeners(); // add listeners
    return this._element; // return the markup
  }
}

export default SubmitForm;

// we need to use a section class to place the form on the DOM
