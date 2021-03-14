import './apiService';
import pictureTpl from '../templates/picture.hbs';
const debounce = require('lodash.debounce');

import { alert } from'@pnotify/core';
import"@pnotify/core/dist/BrightTheme.css";

import NewsApiService from '../js/apiService';
const newsApiService = new NewsApiService();

const refs = {
    formRef: document.querySelector('#search-form'),
    listRef: document.querySelector('.gallery'),
    loadMoreBtnRef: document.querySelector('.js-load-more-btn')
}


refs.formRef.addEventListener('input', debounce(onSearch, 1000));
refs.loadMoreBtnRef.addEventListener('click', loadMore)

  function onSearch (e) {
    e.preventDefault();
    try {
     clearArticlesConteiner();    
    newsApiService.query = e.target.value;
    if (newsApiService.query === ''){        
        return 
    }     
     newsApiService.resetPage();
    newsApiService.fetchPicture().then(addArticlesMarcup)  
    } catch (error) {
        
    }
    
    
}
function loadMore() {
    // const y = e.pageY +2000;
    // window.scrollTo({
    //     top: 1000,
    //     behavior: 'smooth'
    //   });
    if (newsApiService.query === ''){
        const myAlert = alert({                
            text:"Please enter a more specific query!",        
            type: 'info'                
            });
            return 
    }      
    newsApiService.fetchPicture().then(addArticlesMarcup)
    // .then(window.scrollTo(0, y))   
}
function addArticlesMarcup(newPicture) {    
   return refs.listRef.insertAdjacentHTML('beforeend', pictureTpl(newPicture));    
}
function clearArticlesConteiner() {
    refs.listRef.innerHTML = '';
}
// function emptyQuery() {
//     if (newsApiService.query === ''){
//         const myAlert = alert({                
//             text:"Please enter a more specific query!",        
//             type: 'info'                
//             });
//             return 
//     }
// }