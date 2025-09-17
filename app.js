import API from './services/api.js';
import Store from './services/store.js';
import { loadData } from './services/menu.js';

window.app = {}
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
  loadData();
});