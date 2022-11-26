// Index.js file should only be responsible for initializing our classes and governing the relationships between them.

import Section from "../components/Section.js";
import UserCard from "../components/UserCard.js";
import DefaultCard from "../components/DefaultCard.js";
import SubmitForm from "../components/SubmitForm.js";
import {
  messageList,
  cardListSection,
  formSection,
} from "../utils/constants.js";

// we are creating an instance of a SECTION class - cardList: 1. imported SECTION class in index.js file; 2. imported items (messageList, cardListSection, formSection) from constants.js; 3. creating instance of a SECTION class - const = cardList, passing items array (messageList) as an argument to data parameter and passing cardListSection const as well.

// there are 2 different ways to use Section class:
// 1. If we have additional logic that needs to be perfomed on each element (as below - in const card... ) before we add an element to the container -> then we define a custom RENDERER (as we did below with UserCard and DefaultCard) in index.js and use -renderItems- method of Section;

// 2. In our case with Form, we don't need to do it as we just need to add a Form to the DOM.

// create an instance of Section class - a cardList instance ----------------------------------->
const cardList = new Section(
  {
    data: messageList,
    renderer: (item) => {
      const card = item.isOwner
        ? new UserCard(item, ".card-template_type_user")
        : new DefaultCard(item, ".card-template_type_default");

      const cardElement = card.generateCard();
      // adding element to the DOM with -setItem- method
      cardList.setItem(cardElement);
    },
  },
  cardListSection
);

cardList.renderItems();

// create an instance of SubmitForm class - a form instance ------------------------------------>
// The formData parameter of the function is a value we pass to this._handleFormSubmit() when calling it. In other words, it's an object returned by the _getInputValues() method. The SubmitForm class allows us to create several forms with different fields and an event listener function.

const form = new SubmitForm({
  formSelector: ".form-template",
  handleFormSubmit: (formData) => {
    // we pass the formData object containing data from the form
    // to a new instance of UserCard class
    const card = new UserCard(formData, ".card-template_type_user");

    const cardElement = card.generateCard();

    cardList.setItem(cardElement);
  },
});

// call generateForm
const formElement = form.generateForm();

// We use method 2: use Section to place form on DOM, passing it an object (for data it will simply be an array), as we just have a list of messages (messageList) that we need to render to the DOM; we use the container defined to us in constants,js (formSection); and we don't need a custom RENDERER function as all we need is to call -setItems- method, we don't need to pass the initial array to the Section class so we are going to initialize it only to use its -setItem- method

// create an instance of Section class - a formRenderer instance ------------------------------->
const formRenderer = new Section(
  {
    data: [],
  },
  formSection
);

formRenderer.setItem(formElement);

// Stages:
// 1. Create a class that stores the form markup: class SubmitForm() in SubmitForm.js;
// 2. Add this markup to the page;
// 3. When the form is submitted, create an instance of UserCard and insert it into the markup.
// 4. Define the relationship between UserCard and SubmitForm.
