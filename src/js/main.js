import { myFirstFunc } from './modules/my-module.js';
import './styles.js';

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] +
  ':35729/livereload.js?snipver=1"></' + 'script>');

myFirstFunc();
