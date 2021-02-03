//variables

const principal = document.querySelector('#principal');

const uno = document.querySelector('#uno');
const dos = document.querySelector('#dos');
const tres = document.querySelector('#tres');


// funciones 

function fijarFoto(ruta){
    principal.setAttribute('src', ruta)

}



//eventos

uno.addEventListener('click', function(){
    fijarFoto('./img/foto1.jpg')
})

dos.addEventListener('click', function(){
    fijarFoto('./img/foto2.jpg')
})

tres.addEventListener('click', function(){
    fijarFoto('./img/foto3.jpg')
})