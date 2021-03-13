// const KEY = 20658315-dd3dbd2a0550adf6d5ae10318;
// const options = {
//     headers: { key:'20658315-dd3dbd2a0550adf6d5ae10318',
//     },
// };
//  const url = 
//  'https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key={fed}';

//  fetch (url, options).then(r => r.json()).then(console.log);
fetch ('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=20658315-dd3dbd2a0550adf6d5ae10318'
).then(r => r.json()).then(console.log);
