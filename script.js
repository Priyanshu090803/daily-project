let a=0;
let stop=setInterval(func,100);
function func(){
a=a+10;
if(a==500){
    clearInterval(stop);
}
let box=document.querySelector(".box");
box.style.marginLeft=a+"px";
}