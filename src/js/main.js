import './styles.js';
import TabbedContent from './modules/tabbed-content';
import MobileMenu from './modules/mobile-menu';
import Form from './modules/application-form';

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>');

let myTabs = new TabbedContent();
myTabs.init();

let mobileMenu = new MobileMenu();
mobileMenu.init();

let form = new Form();
form.init();
