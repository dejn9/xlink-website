let hamburger = document.querySelector('.hamburger');
let sidepanel = document.querySelector('.sidepanel');


hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('is-active');
    sidepanel.classList.toggle('sidepanel-active');
})
