import './apiService';
import pictureTpl from '../templates/picture.hbs';
const debounce = require('lodash.debounce');
import modalTpl from '../templates/modal.hbs';
import { alert } from'@pnotify/core';
import"@pnotify/core/dist/BrightTheme.css";

import NewsApiService from '../js/apiService';
const newsApiService = new NewsApiService();

// import * as basicLightbox from 'basiclightbox';
const basicLightbox = require('basiclightbox');


const refs = {
    formRef: document.querySelector('#search-form'),
    listRef: document.querySelector('.gallery'),
    loadMoreBtnRef: document.querySelector('.js-load-more-btn'),
    // imgRef: document.querySelector('img')
}
refs.formRef.addEventListener('input', debounce(onSearch, 1000));
refs.loadMoreBtnRef.addEventListener('click', loadMore);
// refs.listRef.addEventListener('click', modal);

 async function onSearch (e) {
    e.preventDefault();
    try {
     clearArticlesConteiner();    
    newsApiService.query = e.target.value;
    if (newsApiService.query === ''){        
        return 
    }     
    newsApiService.resetPage();
    const fetch = await newsApiService.fetchPicture()
    .then(addArticlesMarcup)     
    } catch (error) {        
    }    
}
async function loadMore() {    
    // window.scrollTo({
    //     top: ???,
    //     behavior: 'smooth'
    //   });
    if (newsApiService.query === ''){
        const myAlert = alert({                
            text:"Please enter a more specific query!",        
            type: 'info'                
            });
            return 
    }  
    const newsApi = await newsApiService.fetchPicture()
    .then(addArticlesMarcup);    
    // newsApiService.fetchPicture().then(addArticlesMarcup)
    // .then(window.scrollTo(0, y))   
}
 function addArticlesMarcup(newPicture) {     
   return refs.listRef.insertAdjacentHTML('beforeend', pictureTpl(newPicture));    
}
function clearArticlesConteiner() {
    refs.listRef.innerHTML = '';
}
// function modal () {    
//     const instance = basicLightbox.create(`<img src="????????" width="800" height="600">`)
//     instance.show() 
// }
// function emptyQuery() {
//     if (newsApiService.query === ''){
//         const myAlert = alert({                
//             text:"Please enter a more specific query!",        
//             type: 'info'                
//             });
//             return 
//     }
// }