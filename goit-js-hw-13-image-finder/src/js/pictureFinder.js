import './apiService';
import pictureTpl from '../templates/picture.hbs';
const debounce = require('lodash.debounce');
const refs = {
    formRef: document.querySelector('#search-form'),
    listRef: document.querySelector('.gallery'),
    loadMoreBtnRef: document.querySelector('.js-load-more-btn')
}

refs.formRef.addEventListener('input', debounce(onSearch, 500));

function onSearch (e) {
    e.preventDefault();

}