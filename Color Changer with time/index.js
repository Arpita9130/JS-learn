const randomColor=function () {
    const hex='123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let intervalid
startChanging=function () {
     if(!intervalid){
        intervalid=setInterval(changebg,1000);
     }
    function changebg() {
        document.body.style.backgroundColor=randomColor();
}
    }
const stopChanging=function () {
    clearInterval(intervalid);
    intervalid=null;
   
};
document.querySelector('#Start').addEventListener('click',startChanging);

document.querySelector('#stop').addEventListener('click',stopChanging);

