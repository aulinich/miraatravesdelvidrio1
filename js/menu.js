const esquina = document.querySelector('.esquina')
const menu = document.querySelector('.menu-navegacion')


esquina.addEventListener('click', ()=>{
    menu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menu.classList.contains('spread') && e.target != menu && e.target != esquina){
        console.log('cerrar')
        menu.classList.toggle("spread")
    }
})