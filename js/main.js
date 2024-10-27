const headerElement=document.getElementById('headerElement');

window.addEventListener('scroll',function(){
    if(this.window.scrollY>100){
       headerElement.classList.add('scroll-down');
    }
    else headerElement.classList.remove('scroll-down');

})