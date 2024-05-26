window.onload = () =>{
    const iconOpen = document.getElementById('iconOpen');
    const iconClose = document.getElementById('iconClose');
    const navbar = document.getElementById('navbar');
    
    iconOpen.addEventListener('click', ()=>{
        navbar.classList.add('showNav');
    });

    iconClose.addEventListener('click',()=>{
        navbar.classList.remove('showNav')
    })
}