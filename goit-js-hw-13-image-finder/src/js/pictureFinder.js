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
    formRef: document.querySelector('.search-form'),   
    listRef: document.querySelector('.gallery'),
    loadMoreBtnRef: document.querySelector('.js-load-more-btn'),    
}
// refs.formRef.addEventListener('input', debounce(onSearch, 1000));
refs.formRef.addEventListener('submit', onSearch)
refs.loadMoreBtnRef.addEventListener('click', loadMore);


 async function onSearch (e) {
    e.preventDefault();
    try {
     clearArticlesConteiner();    
    newsApiService.query = e.target.query.value;
    if (newsApiService.query === ''){        
        return 
    }     
    newsApiService.resetPage();
    const fetch = await newsApiService.fetchPicture();    
    const marcup = await addArticlesMarcup(fetch);  
    return marcup;  
    } catch (error) {        
    }    
}
async function loadMore() {    
   try {
        if (newsApiService.query === ''){
        const myAlert = alert({                
            text:"Please enter a more specific query!",        
            type: 'info'                
        });
         return 
    }        
        const newsApi = await newsApiService.fetchPicture();  
        const moreMarcup = await addArticlesMarcup(newsApi)     
    return await scroll(moreMarcup); 
   } 
   catch (error) {       
    }         
}
 function addArticlesMarcup(newPicture) {     
   return refs.listRef.insertAdjacentHTML('beforeend', pictureTpl(newPicture));    
}
function clearArticlesConteiner() {
    refs.listRef.innerHTML = '';
}
function scroll() {
    window.scrollTo({
        top:refs.loadMoreBtnRef.offsetTop,
        left:0,
        behavior:'smooth'   
       })       
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
