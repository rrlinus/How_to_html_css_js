const header=document.getElementById('header')
const preloader=document.getElementById('preloder')
header.style.display='none';
let i=true;
let ct=0;
function fun(){
    window.addEventListener('load',(e)=>{
        i=false
    })
    if(i==false && ct>=10){
        console.log(ct)
        preloader.style.display='none';
        header.style.display='block';
        clearInterval(x);
    }
    ct++;
   
}
var x=setInterval(fun,100)

