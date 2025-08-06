var pizarra = document.getElementById("baseVideojuego");
var dimension = pizarra.getContext("2d");
var mapa = "villa.png";
var fondo = new Image();
fondo.src = mapa;
fondo.addEventListener("load", dibujar);

var vaca = new Image(), cerdo = new Image(), pollo = new Image();
vaca.src="vaca.png";
vaca.addEventListener("load", dibujarVaca);
cerdo.src="cerdo.png";
cerdo.addEventListener("load", dibujarCerdo);
pollo.src="pollo.png";
pollo.addEventListener("load", dibujarPollo);
function dibujarVaca(){
    dimension.drawImage(vaca,10,10);
}
function dibujarCerdo(){
    dimension.drawImage(cerdo,20,20);
}
function dibujarPollo(){
    dimension.drawImage(pollo,30,30);
}
function dibujar(){
    dimension.drawImage(fondo, 0,0);
}
function aleatorio( min, max){
    var resultado;
    resultado =Math.floor(Math.random()*(max - min+1))+min;
    return resultado;
}