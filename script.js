const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop)

const primeiroh2 = document.querySelector('h2')
const h2left = primeiroh2.offsetLeft;

const h2react = primeiroh2.getBoundingClientRect();

console.log(h2react.top);
if(h2react.top)

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    Window.outerHeight,
    window.pageYOffset 
    
);



const small = window.matchMedia('(max-width: 600px)').matches;
console.log(small)
if(small){
    console.log('Usuario mobile ');
}else{
    console.log('Usuario desktop '); 
}