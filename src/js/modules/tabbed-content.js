const tabsClass = '.tabbed-content';
const triggersClass = '.js_tabs-triggers';
const activeTabClass = 'active-tab';

export default class TabbedContent {
  addListeners() {
    for (let i = 0, j = this.triggers.length; i < j; i += 1) {
      let trigger = this.triggers[i];
      trigger.addEventListener('click', evt => this.activateTab(evt));
    }
  }

  activateTab(evt) {
    let tabToShow = document.querySelector(evt.target.getAttribute('href'));

    for (let i = 0, j = this.tabs.length; i < j; i += 1) {
      this.tabs[i].classList.remove(activeTabClass);
    }

    tabToShow.classList.add(activeTabClass);
  }

  init() {
    this.tabs = document.querySelectorAll(tabsClass);
    this.triggers = document.querySelectorAll(triggersClass);
    this.addListeners();
  }
}
