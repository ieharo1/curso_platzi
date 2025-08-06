var pizarra = document.getElementById("baseVideojuego");
var dimension = pizarra.getContext("2d");
var fondo={
    url: "villa2.png",
    cargaOK: false,
};
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);
var vaca={
    url: "vaca2.png",
    cargaOK: false,
};
var cerdo={
    url: "cerdo2.png",
    cargaOK: false,
};
var pollo={
    url: "pollo2.png",
    cargaOK:false,
};
vaca.objeto = new Image();
vaca.objeto.src=vaca.url;
vaca.objeto.addEventListener("load", cargarVaca);
cerdo.objeto = new Image();
cerdo.objeto.src=cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdo);
pollo.objeto = new Image();
pollo.objeto.src=pollo.url;
pollo.objeto.addEventListener("load", cargarPollo);
function cargarVaca(){
    vaca.cargaOK = true;
    dibujar();
}
function cargarCerdo(){
    cerdo.cargaOK = true;
    dibujar();
}
function cargarPollo(){
    pollo.cargaOK = true;
    dibujar();
}
function cargarFondo(){
    fondo.cargaOK = true;
    dibujar();
}
function dibujar(){
    if(fondo.cargaOK){
        dimension.drawImage(fondo.objeto,0,0);
    }
    if (vaca.cargaOK){
        objetoDibujar(vaca);
    }
    if(cerdo.cargaOK){
        objetoDibujar(cerdo);
    }
    if(pollo.cargaOK){
        objetoDibujar(pollo);
    }
}
function aleatorio( min, max){
    var resultado;
    resultado =Math.floor(Math.random()*(max - min+1))+min;
    return resultado;
}
function objetoDibujar(obj){
    for(var i=0; i<10;i++){
        dimension.drawImage(obj.objeto, aleatorio(0,400),aleatorio(0,400));
    }
}