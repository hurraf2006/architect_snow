const g1 = document.querySelector('.g1'),
g2 = document.querySelector('.g2'),
g3 = document.querySelector('.g3'),
g4 = document.querySelector('.g4'),
g5 = document.querySelector('.g5'),
g6 = document.querySelector('.g6'),
g7 = document.querySelector('.g7'),
g8 = document.querySelector('.g8'),
g9 = document.querySelector('.g9'),
g10 = document.querySelector('.g10'),
gallery = document.querySelector('.gallery_photos')



// window.addEventListener('scroll', ()=> {
  setTimeout(() => {
    if (pageYOffset > gallery.offsetTop - gallery.clientHeight * 10) {
        g1.style = `transform: translate(${0}%,${0}%);`
        g2.style = `transform: translate(${0}%,${0}%);`
        g3.style = `transform: translate(${0}%,${0}%);`
        g4.style = `transform: translate(${0}%,${0}%);`
        g5.style = `transform: translate(${0}%,${0}%);`
        g6.style = `transform: translate(${0}%,${0}%);`
        g7.style = `transform: translate(${0}%,${0}%);`
        g8.style = `transform: translate(${0}%,${0}%);`
        g9.style = `transform: translate(${0}%,${0}%);`
        g10.style = `transform: translate(${0}%,${0}%);`

 }
  }, 1000);

// })

