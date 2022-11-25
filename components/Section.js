// SECTION class class doesn't need any methods returning markup for class instances. It exists specifically to add elements to the DOM. This class doesn't have any event handlers, nor does it have properties to store markup. Such classes are also called LAYERS. An important feature of layers is their ability to work with the specific type of data provided by other classes, such as markup or arrays of data. Layers themselves can also provide data for other classes. A class can be responsible for sending requests to the server and passing the retrieved data to other classes. When designing layers (and, by extension, classes), it's important to avoid referencing other classes.

// SECTION class constructor contains 3 elements:
// 1. DATA array of elements to be rendered on the page (first parameter is an object, from which we get the data property, using destructuring assignment syntax);

// 2. RENDERER - a function which will be called on all of the elements in the DATA array;

// 3. CSS SELECTOR that will be used to specify where we'll embed our elements (second parameter is a string for the container element, into which our from element will be rendered - containerSelector).This will allow us to create class instances using any markup.

// SECTION class uses 2 methods (functions): -renderItems- (method iterates over the initial array of DATA from the class constructor and calls -renderer- on each array element) and -setItem- (method takes the element argument into the appropriate container - appends to DOM). Both methods are public.

// Inside the constructor we define 2 fields: a private field named _renderedItems, which has the data value, and a private field named _container, which has a DOM element as its value (this element is found via the containerSelector selector passed to the constructor).

// -setItem- method has a parameter - (element): this method places the argument passed to it (in our case - element) in the _container field by using the append() method.

// -renderItems- method: in the -forEach- method, we iterate over _renderedItems, and execute specific code on each item element in the array; we pass (item) variable to it.

export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._renderedItems.forEach((item) => this._renderer(item));
  }

  setItem(element) {
    this._container.append(element);
  }
}
