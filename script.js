const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


let closeMenu = document.getElementById('menu');

let activeMenu = document.getElementById('nav');

function fecharMenu(){
    activeMenu.classList.remove('active');
}

closeMenu.addEventListener('click', fecharMenu);


let imagens= document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal-container');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('.fechar');
let srcVal="";

for(let i =0; i<imagens.length;i++){
    imagens[i].addEventListener('click',function(){
        
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('mostrar');
    });
    
}

btClose.addEventListener('click', function(){
  modal.classList.toggle('mostrar');
});


