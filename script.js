const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) =>{
console.log(item, index)
});

const doc =document.querySelectorAll('p')
doc.forEach((item) =>{
   console.log(item) 
})


const doc2 =document.querySelectorAll('p')
doc2.forEach((item) =>{
   console.log(item.innerText) 
})