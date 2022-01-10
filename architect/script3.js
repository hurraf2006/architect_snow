const pi1 = document.querySelector('.pi1'),
pi2 = document.querySelector('.pi2'),
pi3 = document.querySelector('.pi3'),
p1 = document.querySelector('.p1'),
p2 = document.querySelector('.p2'),
p3 = document.querySelector('.p3'),
// projectlar = document.querySelector('.projectlar_box'),
pitem1 = document.querySelector('.pitem1'),
pitem2 = document.querySelector('.pitem2'),
pitem3 = document.querySelector('.pitem3')



window.addEventListener('scroll', ()=> {
       if (pageYOffset > pitem1.offsetTop - pitem1.clientHeight) {
           pi1.style = ` transform: translateX(0%);`
           p1.style = ` transform: translateX(0%)  rotate(360deg);`
      

       }
})


window.addEventListener('scroll', ()=> {
    if (pageYOffset > pitem2.offsetTop - pitem2.clientHeight) {
      
        pi2.style = ` transform: translateX(0%)  rotate(360deg);`
        p2.style = ` transform: translateX(0%);`
    

    }
})

window.addEventListener('scroll', ()=> {
    if (pageYOffset > pitem3.offsetTop - pitem3.clientHeight) {
     
   
        pi3.style = ` transform: translateX(0%);`
        p3.style = ` transform: translateX(0%)  rotate(360deg);`

    }
})



