let mobileMenuButton=document.querySelector('.mobile-menu')
let computerMenu=document.querySelector('.computer-menu')
mobileMenuButton.addEventListener('click', ()=>{
    computerMenu.classList.toggle('open')
})