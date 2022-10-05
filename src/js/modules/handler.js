
let counter=0;


export let handler=() => {
  const reset=document.querySelector('.reset');
  const count=document.querySelector('.counter');  
  const close=document.querySelector('.close');
  const pop_up=document.querySelector('.popup');
  const module=document.querySelector('.module');
  const over_lay=document.querySelector('.overlay');
  
  

  counter=counter+1;
  count.innerHTML=` ${counter}`;
  pop_up.style.display= "inline" ;
  over_lay.style.display="block";
  counter>5?reset.style.display="inline":null;
  reset.addEventListener('click', ()=>{counter=0; count.innerHTML=` ${counter}`; reset.style.display="none"});
  close.addEventListener('click', ()=>{pop_up.style.display="none"; over_lay.style.display="none"});
  }
  
  