


let contador = document.getElementById('contadorVisitas');
let clear = document.getElementById('btnReestablecer');


document.addEventListener('DOMContentLoaded' , ( )=>{
      
    let viewers = localStorage.getItem('contadorVisitas')
       viewers = viewers || 0;
       viewers ++;
       localStorage.setItem('contadorVisitas' , viewers);
       contador.textContent = viewers;





})

  

clear.addEventListener('click', ()=> {

  let viewers = 0;

  localStorage.setItem('contadorVisitas', viewers);


  contador.textContent = viewers;
  });

