/* Hola Joni hasta aca llegue, le estoy metiendo lo mas que puedo lince, salduos*/

/* VARIABLES VENTANA MODAL */
let abrirModal = document.querySelector(".abrir-modal");
let modal = document.querySelector(".modal");
let cerrarModal = document.querySelector(".cerrar-modal");

/* VARIABLES TIPO DE TAREA */
/* let valorPersonal = document.getElementById("personal").value;
let valorDomestica = document.getElementById("domestica").value;
let valorLaboral = document.getElementById("laboral").value;
let valorEntre = document.getElementById("entretenimiento").value; */

/* VARIABLES TAREAS AGREGADAS */
let botonAgregado = document.getElementById("agregado");
let perrito = document.getElementById("perrito");
let texto = document.querySelector(".nada");
let cuerpo = document.querySelector(".imagen-central");
let contador = 0;
let parteCentral = document.querySelector(".imagen-central");
let personal = document.getElementById("personal");

/* EVENTO MODAL  */
abrirModal.addEventListener(`click`, (e) => {
    e.preventDefault(e);
    modal.classList.add(`mostrar-modal`);
});

cerrarModal.addEventListener(`click`, (e) => {
    e.preventDefault(e);
    modal.classList.remove(`mostrar-modal`);
});

/* EVENTO AGREGAR TAREA */

botonAgregado.addEventListener(`click`, () => {
    document.getElementById("perrito").style.display = "none";
    texto.innerHTML = "Tarea Agregada";
    let input = document.getElementById("input").value;
    if (input != "") {
        
        contador++;
        let divDentro = document.querySelector(".div-dentro");
        let ul = document.createElement("ul");
        let lista = document.createElement("li");
        let imgA = document.createElement("img");
        imgA.src = "assets/usuario(1).png" 



        ul.appendChild(lista);
        divDentro.appendChild(ul);
        parteCentral.appendChild(divDentro);
        lista.textContent =input;
        
                let selec = document.getElementById("tarea");
                let img2 = document.createElement("img");
                img2.src = "assets/red-domestica.png"
                let img3 = document.createElement("img");
                img3.src = "assets/consola.png"
                let img4 = document.createElement("img");
                img4.src ="assets/maletin.png"

                if(selec.value == "domestica"){
                    ul.appendChild(img2)
                    img2.style.width ="30px" 
                }else if (selec.value == "personal"){
                    ul.appendChild(imgA)
                    imgA.style.width ="20px"
                }else if(selec.value =="entretenimiento"){
                    ul.appendChild(img3)
                    img3.style.width ="30px"
                }else{
                    ul.appendChild(img4)
                    img4.style.width ="30px"
                }
            }
        }
    )



let gris = document.getElementById("gris");
let verde = document.getElementById("verde");
let naranja = document.getElementById("naranja");
let rojo = document.getElementById("rojo");


                     
/* function prioridad () {
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



} */