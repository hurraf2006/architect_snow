const img1 = document.querySelector('.img1'),
img2 = document.querySelector('.img2'),
img3 = document.querySelector('.img3'),
img4 = document.querySelector('.img4'),
img5 = document.querySelector('.img5'),
img6 = document.querySelector('.img6'),
item1 = document.querySelector('.item1'),
item2 = document.querySelector('.item2'),
item3 = document.querySelector('.item3')


window.addEventListener('scroll', ()=>{
    if (pageYOffset > item1.offsetTop - item1.clientHeight) {
        img1.style = `opacity: 1;`
        img2.style = `opacity: 1;`

    }
})
window.addEventListener('scroll', ()=>{
    if (pageYOffset > item2.offsetTop - item2.clientHeight) {
        img3.style = `opacity: 1;`
        img4.style = `opacity: 1;`

    }
})
window.addEventListener('scroll', ()=>{
    if (pageYOffset > item3.offsetTop - item3.clientHeight) {
        img5.style = `opacity: 1;`
        img6.style = `opacity: 1;`

    }
})