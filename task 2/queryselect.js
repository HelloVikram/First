const basketHeading=document.querySelector('#basket-heading');
basketHeading.style.color='brown';
const list=document.querySelectorAll('.fruit');
for(let i=0;i<list.length;i++){
  list[i].style.padding='30px';
  list[i].style.margin='30px';
  list[i].style.borderRadius='5px';
  
}
for(let i=0;i<list.length;i=i+2){
  
  list[i].style.backgroundColor='red';
  list[i].style.color='white';
}
