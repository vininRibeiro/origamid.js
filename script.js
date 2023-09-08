const menu = document.querySelector('.menu');
console.log(menu)

const animais = document.querySelector('.animais');
console.log(animais.attributes['data-texto'])

const img = document.querySelector('img');

img.setAttribute('alt', 'è uma raposa ')

console.log(img.getAttribute('src'))


const intensMenu = document.querySelectorAll('.menu a')
intensMenu.forEach((item) => {
    item.classList.add('ativo')
})
intensMenu.forEach((item) => {
    item.remove('ativo')
})
intensMenu[0].classList.add('ativo')

//const itensRemove = document.querySelectorAll('.menu a')
//itensRemove.forEach((item) =>{
//    item.classList.remove('ativo')
//})

const imgs = document.querySelectorAll('img')

imgs.forEach((img) =>{
const possuiAtributo = img.hasAttribute('alt')
console.log(img, possuiAtributo)
})

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com/');

console.log(link)

