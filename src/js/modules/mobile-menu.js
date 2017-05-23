const hamburgerClass = '.hamburguer';
const closeMenuClass = '.close-menu';
const menuClass = '.menu';
const openClass = 'js_open';
const openBodyClass = 'js_on-menu-open';

export default class MobileMenu {
  addListeners() {
    this.hamburguer.addEventListener('click', () => this.openMenu());
    this.closeButton.addEventListener('click', () => this.closeMenu());
  }

  openMenu() {
    this.menu.classList.add(openClass);
    document.body.classList.add(openBodyClass);
  }

  closeMenu() {
    this.menu.classList.remove(openClass);
    document.body.classList.remove(openBodyClass);
  }

  init() {
    this.hamburguer = document.querySelector(hamburgerClass);
    this.closeButton = document.querySelector(closeMenuClass);
    this.menu = document.querySelector(menuClass);
    this.addListeners();
  }
}
