const menuIcon = document.querySelector('.menu-icon'),
      list = document.querySelector('.list'),
      listClose = document.querySelector('.menu-close')


menuIcon.addEventListener('click', function () {
   list.style = `right: 0;`

})

listClose.addEventListener('click', function () {
    list.style = `right: -100%;`


   

})




const about = document.querySelector('.about'),
img1 = document.querySelector('.aboutimg1'),
img2 = document.querySelector('.aboutimg2'),
img3 = document.querySelector('.aboutimg3'),
aboutInfo = document.querySelector('.about_info')




window.addEventListener('scroll', ()=>{
       if (pageYOffset > about.offsetTop - about.clientHeight * (3.5/4)) {
        img1.style = `transform: translateX(${0}%);
                      opacity: 1;`
        img2.style = `transform: translateX(${0}%);
                      opacity: 1;`
        img3.style = `transform: translateX(${0}%);
                      opacity: 1;`
                      aboutInfo.style = `transform: translateX(${0}%)`
       

       }
})
 


const fItem1 = document.querySelector('.focus_item1')
const fItem2 = document.querySelector('.focus_item2')
const focus = document.querySelector('.mainFocus')
const focusTitle = document.querySelector('.mainFocus_title')  

window.addEventListener('scroll', ()=>{
    if (pageYOffset > focus.offsetTop - focus.clientHeight * 3.5/4) {
        fItem1.style = `transform: translateX(${0}%)`
        fItem2.style = `transform: translateX(${0}%)`
        focusTitle.style = `opacity: 1;`
    }
})
      



const project1 = document.querySelector('.project_item1'),
project2 = document.querySelector('.project_item2'),
project3 = document.querySelector('.project_item3'),
project4 = document.querySelector('.project_item4'),
project5 = document.querySelector('.project_item5'),
project = document.querySelector('.project')

window.addEventListener('scroll', ()=> {
    if (pageYOffset > project.offsetTop - project.clientHeight * 1.7/4) {
        project1.style = `transform: translate(${0}%, ${0}%)`
        project2.style = `transform: translate(${0}%, ${0}%)`
        project3.style = `transform: translate(${0}%, ${0}%)`
        project4.style = `transform: translate(${0}%, ${0}%)`
        project5.style = `transform: translate(${0}%, ${0}%)`
    }

})




const sendBtn = document.querySelector('.emailcha'),
thankModal = document.querySelector('.modal_thank'),
thankBack = document.querySelector('.back')
sendBtn.addEventListener('click', ()=> {
    thankModal.style = `display: flex !important;
`

})


thankBack.addEventListener('click', ()=>{
    document.location.reload(true)
})


const listp2 = document.querySelector('.listp2')


menuIcon.addEventListener('click', ()=> {
    listp2.style = `right:0;`
})



const preloader = document.querySelector('.preloader_box'),
svg = document.querySelector('.preloader')

setTimeout(() => {
    preloader.classList.add('hide');
    svg.style = `transform: scale(0);`

}, 1500);
    setTimeout(() => {
        preloader.remove();
    }, 2500);


