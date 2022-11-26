// we have a constructor function which takes a single argument - an object - with a property called { formSelector }

// 1. We create a class that stores the form markup - "SubmitForm"

// We pass the selector of the form template element to the form class constructor

// Having collected the input fields' data, we need to pass it to the UserCard class in order to return the markup. We agreed to avoid using tight coupling when setting relationships between classes. That's why all operations — such as building cards and embedding the form in markup — that happen when the form is submitted will be passed in the body of a callback function. Let's name this callback handleFormSubmit():

class SubmitForm {
  constructor({ formSelector, handleFormSubmit }) {
    this._formSelector = formSelector;
    this._handleFormSubmit = handleFormSubmit;
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

  // In the _setEventListeners() method, we need to call _handleFormSubmit() method when submitting the form. We also need to pass an object returned by the _getInputValues() function as an argument to it:

  _setEventListeners() {
    this._element.addEventListener("submit", (evt) => {
      //   preventing default behavior of browser
      evt.preventDefault();

      // Add a _handleFormSubmit() function call
      // Pass an object which is the result of the _getInputValues work to it
      this._handleFormSubmit(this._getInputValues());

      //   resetting the form after submission
      this._element.reset();
    });
  }

  // we create a private method that builds an array from all the form fields, iterates over them and adds each value of the array to an object. The name attribute of each field will serve as a key in this object.
  _getInputValues() {
    this._inputList = this._element.querySelectorAll(".form__input");

    this._formValues = {};
    this._inputList.forEach(
      (input) => (this._formValues[input.name] = input.value)
    );

    return this._formValues;
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
