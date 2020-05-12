import Query from './src/query.js';
import Hamburger from './src/hamburger.js';
const hamburgerNode = document.querySelector('.hamburger-menu');
const hamburger = new Hamburger(hamburgerNode);
hamburger.burgerMenu(hamburgerNode);

const mainButton = document.querySelector('.main-section__button');
const urlQuery = 'https://httpbin.org/status/200';
const query = new Query(urlQuery);
query.sendQuery(mainButton);