let abrirModal = document.querySelector(".abrir-modal");
let modal = document.querySelector(".modal");
let cerrarModal= document.querySelector(".cerrar-modal");

let valorPersonal = document.getElementById("personal").value;
let valorDomestica = document.getElementById("domestica").value;
let valorLaboral = document.getElementById("laboral").value;
let valorEntre = document.getElementById("entretenimiento").value; 

let botonAgregado = document.getElementById("agregado");
let perrito = document.getElementById("perrito");
let texto = document.querySelector(".nada");
let cuerpo = document.querySelector(".imagen-central");
let contador = 0;
let parteCentral = document.querySelector(".imagen-central");
let personal = document.getElementById("personal")


abrirModal.addEventListener(`click`,(e)=>{
    e.preventDefault(e)
    modal.classList.add(`mostrar-modal`)
})

cerrarModal.addEventListener(`click`,(e)=>{
    e.preventDefault(e)
    modal.classList.remove(`mostrar-modal`)
})

botonAgregado.addEventListener(`click`,()=>{
    document.getElementById("perrito").style.display="none";
    texto.innerHTML = "Tarea Agregada";
    let input = document.getElementById("input").value
    if(input!=""){
        contador++;
        let divDentro = document.querySelector(".div-dentro");
        let ul = document.createElement("ul");
        let lista = document.createElement("li");
        
       ul.appendChild(lista);
       divDentro.appendChild(ul);
       parteCentral.appendChild(divDentro);
       lista.textContent= input
     
       prioridad()
       return false
      
    }

})


 function seleccionado(){
    let select = document.getElementById("tarea");
    let imagenPersonal = document.querySelector(".img-personal");
    let imagenDomestica = document.querySelector(".img-domestica");
    let imagenEntrete = document.querySelector(".img-entretenimiento");
    let imagenLaboral = document.querySelector(".img-laboral")
   
    if (select.value =="personal"){
       


    }else if (select.value =="domestica"){
        alert("domestica");

    }else if (select.value =="entretenimiento"){
        alert("entretenimiento");

    }else(select.value =="laboral")
        alert("laboral")
    
 } 
 


function prioridad () {
    let prioridadGris = document.getElementById("gris");
    let prioridadVerde = document.getElementById("verde");
    let prioridadNaranja = document.getElementById("naranja");
    let prioridadRojo = document.getElementById("rojo");

  let cajaGris =    document.querySelector(`.div-dentro ul`).style.borderRight=  "15px solid gray"
  let cajaVerde =    document.querySelector(`.div-dentro ul`).style.borderRight=  "15px solid green"
  let cajaNaranja =    document.querySelector(`.div-dentro ul`).style.borderRight=  "15px solid orange"
let cajaRojo =    document.querySelector(`.div-dentro ul`).style.borderRight=  "15px solid red" 


prioridadGris.addEventListener("click",()=>{
    cajaGris
})

prioridadVerde.addEventListener("click",()=>{
    cajaVerde
})
prioridadNaranja.addEventListener("click",()=>{
    cajaNaranja
})

prioridadRojo.addEventListener("click",()=>{
    cajaRojo
})



}