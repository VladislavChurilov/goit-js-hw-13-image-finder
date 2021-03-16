
const KEY = '20658315-dd3dbd2a0550adf6d5ae10318';
const BASE_URL = 'https://pixabay.com/api/';

export default class newsApiService{
    constructor (){
        this.searchQuery = '';
        this.page = 1;
    }    
    async fetchPicture () {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
        const picture = await fetch(url);
        const newPicture = await picture.json();        
        const increment = await (this.incrementPage(newPicture));       
        return newPicture;
    }
    incrementPage(){
        this.page +=1;
    }
    resetPage(){
        this.page = 1;
    }
    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        return this.searchQuery = newQuery;
    }
}

// use then!!
// fetchPicture(){   
        
    //     const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${KEY}`;
    //    return fetch(url)
    //     .then(picture => picture.json())
    //     .then(articles =>{            
    //         this.page ++;            
    //         // this.incrementPage();            
    //         return articles; 
    //     });        
    // }