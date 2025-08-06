var color = document.getElementById("seleccionarColor");
var pizarra = document.getElementById("pizarron");
var dimension = pizarra.getContext("2d");
var x, y;


pizarra.addEventListener("mousedown", pulsarMouse);

function pulsarMouse (evento){
    x= evento.layerX;
    y= evento.layerY;
}

pizarra.addEventListener("mousemove", moverMouse);

function moverMouse(evento){
    if(evento.buttons==1){
        dibujarLinea(color.value, x, y, evento.layerX, evento.layerY);
        x=evento.layerX;
        y=evento.layerY;
    }
    else{
        x=evento.layerX;
        y=evento.layerY;
    }
}
//pizarra.addEventListener("mouseup", levantarMouse);

//function levantarMouse(evento){
    
//}
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    dimension.beginPath();
    dimension.lineWidth =3;
    dimension.strokeStyle=color;
    dimension.moveTo(xinicial, yinicial);
    dimension.lineTo(xfinal, yfinal);
    dimension.stroke();
    dimension.closePath;
}