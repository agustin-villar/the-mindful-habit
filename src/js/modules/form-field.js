const wrongClass = 'js_wrong-field';
const rightClass = 'js_right-field';

export default class Field {
  constructor(element) {
    this.el = element;
  }

  reset() {
    this.el.value = '';
    this.el.classList.remove(wrongClass);
    this.el.classList.remove(rightClass);
  }

  onInput() {
    this.el.classList.remove(wrongClass);
    this.el.classList.remove(rightClass);

    if(this.el.hasAttribute('required') && this.el.value === '') {
      this.el.classList.add(wrongClass);
    } else if(this.el.hasAttribute('pattern') && !this.el.value.match(this.el.pattern)) {
      this.el.classList.add(wrongClass);
    } else {
      this.el.classList.add(rightClass);
    }
  }

  init() {
    this.el.addEventListener('input', () => this.onInput());
  }
}
