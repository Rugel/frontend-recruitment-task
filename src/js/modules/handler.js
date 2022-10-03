

let counter=0;
export let handler=() => {
  counter=counter+1;
  document.getElementById('counter').innerHTML=` ${counter}`;
  document.getElementById('popup').style.display= "inline" ;
  }