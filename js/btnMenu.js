//Pegando o elemento HTML do documento
const $menu = document.querySelector('.wrap-menu')

                      

//Ação Botão Hamburguer do Menu
const $btnMenu = document.querySelector('.btnMenu')
    
$btnMenu.addEventListener('click',function(){
   $menu.classList.remove('menuClose')
    
})
//----------------------------

//Ação Botão Fechar do Menu
const $btnMenuClose = document.querySelector('.btnMenu-close')

$btnMenuClose.addEventListener('click',function(){
   $menu.classList.add('menuClose')
})
//-----------------------------