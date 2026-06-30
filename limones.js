let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
let personajeX=canvas.width/2;


function iniciar(){
    DibujarSuelo();
    DibujarPersonaje();    
}

function DibujarSuelo(){
    ctx.fillStyle="#e61c1c";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
    }

function DibujarPersonaje(){
    ctx.fillStyle="#e9ec12";
    ctx.fillRect(personajeX,canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE),ANCHO_PERSONAJE,ALTURA_PERSONAJE);
    }

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();
    
}

function actualizarPantalla(){
    limpiarCanva();
    DibujarSuelo();
    DibujarPersonaje();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    DibujarSuelo();
}


