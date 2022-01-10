const contactBtn = document.querySelector('.contacti_btn'),
askModal = document.querySelector('.contacti_modal'),
contactSend = document.querySelector('.contacti_send'),
backBtn = document.querySelector('.back'),
thankModal = document.querySelector('.contacti_thank')


contactBtn.addEventListener('click', ()=>{
    askModal.style = `display: flex !important;`
})

contactSend.addEventListener('click', ()=> {
    askModal.style = `display: none !important;`
    thankModal.style = `display: flex !important;`

})

backBtn.addEventListener('click', ()=>{
    document.location.reload(true)
})