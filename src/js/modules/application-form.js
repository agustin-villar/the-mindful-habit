import Field from './form-field';

const formId = '#application-form';
const fieldsSelector = 'input[type=text], input[type=date], select, textarea, input[type=file]';
const overlayClass = '.overlay';
const overlayVisible = 'js_visible';
const buttonClass = '.custom-button';
const openBodyClass = 'js_on-menu-open';
const backLinkClass = '.back-link';

export default class Form {
  onFormSubmit(evt) {
    evt.preventDefault();
    this.overlay.classList.add(overlayVisible);
    document.body.classList.add(openBodyClass);
    this.resetForm();
  }

  onDismissButton() {
    this.overlay.classList.remove(overlayVisible);
    document.body.classList.remove(openBodyClass);
  }

  resetForm() {
    for(let i = 0, j = this.fields.length; i < j; i += 1) {
      let field = new Field(this.fields[i]);
      field.reset();
    }
  }

  setForm() {
    this.formElement.addEventListener('submit', evt => this.onFormSubmit(evt));
    this.dismissButton.addEventListener('click', evt => this.onDismissButton(evt));
    this.backButton.addEventListener('click', () => this.resetForm());

    for(let i = 0, j = this.fields.length; i < j; i += 1) {
      let field = new Field(this.fields[i]);
      field.init();
    }
  }

  init() {
    this.formElement = document.querySelector(formId);
    this.fields = this.formElement.querySelectorAll(fieldsSelector);
    this.overlay = document.querySelector(overlayClass);
    this.dismissButton = this.overlay.querySelector(buttonClass);
    this.backButton = document.querySelector(backLinkClass);
    this.setForm();
  }
}
