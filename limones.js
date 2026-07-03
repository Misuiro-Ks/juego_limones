let canvas=document.getElementById("areajuego");
let ctx=canvas.getContext("2d");

const ALTURA_SUELO=20;
const ALTURA_PERSONAJE=60;
const ANCHO_PERSONAJE=40;
const ANCHO_LIMON=20;
const ALTURA_LIMON=20;

let personajeX=canvas.width/2;
let personajeY=canvas.height-(ALTURA_SUELO+ALTURA_PERSONAJE);
let limonX=canvas.width/2;
let limonY=5;

function iniciar(){
    DibujarSuelo();
    DibujarPersonaje();    
    DibujarLimon();
    aparecerLimon();
}

function DibujarSuelo(){
    ctx.fillStyle="#e61c1c";
    ctx.fillRect(0,canvas.height-ALTURA_SUELO,canvas.width,ALTURA_SUELO);
    }

function DibujarPersonaje(){
    ctx.fillStyle="#e9ec12";
    ctx.fillRect(personajeX,personajeY,ANCHO_PERSONAJE,ALTURA_PERSONAJE);
    }

function moverIzquierda(){
    personajeX=personajeX-10;
    actualizarPantalla();  
    
}

function moverDerecha(){
    personajeX=personajeX+10;
    actualizarPantalla();  
    
}

function actualizarPantalla(){
    limpiarCanva();
    DibujarSuelo();
    DibujarPersonaje();
    DibujarLimon();
}

function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}

function DibujarLimon(){
    ctx.fillStyle="green";
    ctx.fillRect(limonX,limonY,ANCHO_LIMON,ALTURA_LIMON);
}

function bajarLimon(){
    limonY=limonY+10;
    actualizarPantalla();
    detectarColision();
    
}

function detectarColision(){
    if(limonX+ANCHO_LIMON>personajeX && 
         limonX<personajeX+ANCHO_PERSONAJE && 
         limonY+ALTURA_LIMON>personajeY && 
         limonY<personajeY+ALTURA_PERSONAJE){
        //alert("ATRAPADO!! ");
        aparecerLimon();
    
    }
    
}

function probarAleatorio(){
    let aleatorio=generarAleatorio(10,80);
    console.log(aleatorio);

}

function aparecerLimon(){
    limonX=generarAleatorio(0,canvas.width-ANCHO_LIMON);
    limonY=0;
    actualizarPantalla();
}