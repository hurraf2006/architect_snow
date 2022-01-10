const preloader = document.querySelector('.preloader_box'),
svg = document.querySelector('.preloader')

setTimeout(() => {
    preloader.classList.add('hide');
    svg.style = `transform: scale(0);`

}, 1500);
    setTimeout(() => {
        preloader.remove();
    }, 2500);
