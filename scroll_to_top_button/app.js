const btn=document.getElementById('btn')
btn.style.display='none'
window.addEventListener('scroll',()=>{
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        btn.style.display='block'
    }
})
btn.addEventListener('click',()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
    btn.style.display='none'
})