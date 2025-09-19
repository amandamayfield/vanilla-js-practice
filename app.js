import API from './services/api.js';
import Store from './services/store.js';
import { loadData } from './services/menu.js';
import Router from './services/router.js';

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
  app.router.init();
});