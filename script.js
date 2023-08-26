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