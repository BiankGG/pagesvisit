


let contador = document.getElementById('contadorVisitas');
let clear = document.getElementById('btnReestablecer');
//localStorage.setItem('contadorVisitas', viewers);
//let viewers = localStorage.getItem('contadorVisitas')


//creo evento con html(document)
document.addEventListener('DOMContentLoaded', () => {
  
 //obtiene valor almacenado en CV y se guarda en variable
     let viewers = localStorage.getItem('contadorVisitas');
     // se le asigna 0 al contador
     viewers =viewers || 0; 
     //incrementar cada vez +1
     viewers++;
     //actualiza el valor que se va almacenando
     localStorage.setItem('contadorVisitas', viewers)
     //actualiza con html con let'contador' contador de visitas
     contador.textContent = viewers;


})




//crear evento boton restablecer

clear.addEventListener ('click', () =>{
  //poner valor a 0
    let viewers = 0;
    //actualiza el valor que se va almacenando
    localStorage.setItem('contadorVisitas',viewers)
    //poner a 0 el contador en html
    contador.textContent= viewers;


})