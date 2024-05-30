window.onload = () =>{
    const iconOpen = document.getElementById('iconOpen');
    const iconClose = document.getElementById('iconClose');
    const navbar = document.getElementById('navbar');
    const webImg = document.getElementById('webImg');
    
    if (window.innerWidth > 768) {
        webImg.src="./assets/images/image-web-3-desktop.jpg"
    }
    iconOpen.addEventListener('click', ()=>{
        navbar.classList.add('showNav');
    });

    iconClose.addEventListener('click',()=>{
        navbar.classList.remove('showNav')
    })
}