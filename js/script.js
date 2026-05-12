//('JS carregado');

// Seleção de Document Obeject Model (DOM)

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);

function manipularMenu(){
    //console.log('Função acionada')

// add ou remove a classe menu-open
menu.classList.toggle ('menu-open');
btnMenu.classList.toggle ('x');

}

function fecharMenu(){
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
}

//Eventos -> Ações(gatilhos - dispara a função construída) normalmente realizadas pelo usuário
btnMenu.addEventListener('click', manipularMenu);
menu.addEventListener('click', fecharMenu);