//('JS carregado');

// Seleção de Document Obeject Model (DOM)

let btnMenu = document.querySelector('.btn-menu');
let menu = document.querySelector('.menu');
let links = document.querySelectorAll('.menu a'); //Array/Lista
//console.log(links);

//console.log(btnMenu);
//console.log(menu);

function manipularMenu() {
    //console.log('Função acionada')

    // add ou remove a classe menu-open
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');

}

function fecharMenu() {
    menu.classList.remove('menu-open');
    btnMenu.classList.remove('x');
}


//Eventos -> Ações(gatilhos - dispara a função construída) normalmente realizadas pelo usuário
btnMenu.addEventListener('click', manipularMenu);
//menu.addEventListener('click', fecharMenu);

//Estrutura de repetição que pega cada item Array
links.forEach(function (link) {
    //Para cada item do array que acionar o evento de click
    link.addEventListener('click', fecharMenu);
})

//Animações com GSAP
gsap.from(".hero h1", {
    opacity: 0,
    x: -100,
    duration: 2,
    ease: "power1.out"
    //rotate:360
});
// AREA DA HERO
gsap.from(".slogan", {
    opacity: 0,
    x: -100,
    duration: 2,
    ease: "power1.out"
    //rotate:360
});

gsap.from(".hero p:not(.slogan)", {
    opacity: 0,
    x: -100,
    duration: 2,
    delay: 0.3,
    ease: "power1.out"

});

gsap.from(".hero .container-btn", {
    opacity: 0,
    x: -100,
    duration: 2,
    ease: "power1.out"
    //rotate:360
});

//AREA DO SOBRE//

gsap.from(".sobre-img, .sobre-content", {
    opacity: 0,
    y: -100,
    duration: 2,
    stagger: 0.5,
    ease: "power1.out",

    scrollTrigger: {
        trigger: '.sobre',
        start: 'top 60%'

    }
});

//MISSAO

gsap.from(".missao h2, .missao p, .missao .container-btn", {
    opacity: 0,
    Y: 100,
    duration: 0.5,
    stagger: 1,

    scrollTrigger: {
        trigger: '.missao',
        start: 'top 80%',


    }

});

//ARTISTA

gsap.from(".artistas", {
    opacity: 0,
    duration: 0.5,

    scrollTrigger: {
        trigger: '.artistas',
        start: 'top 50%',
    }

});

gsap.from(".agende h2, .agende p, .agende .container-btn", {
    opacity: 0,
    Y: 100,
    duration: 0.5,
    stagger: 0.8,

    scrollTrigger: {
        trigger: '.agende',
        start: 'top 80%',


    }

});
