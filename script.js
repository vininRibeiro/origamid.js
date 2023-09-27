const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const react = primeiroh2.getBoundingClientRect();
console.log(react)