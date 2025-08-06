var texto =document.getElementById("texto_lineas");
var boton =document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

function dibujoPorClick(){
    var lineas = parseInt(texto.value);
    alert("No me toques ahi " +lineas);
    var l=0;
    while(l<lineas){
       dibujarLinea("grey",0,l*(300/lineas),(l+1)*(300/lineas),300);
       l++;
    }

    for(l=0;l<lineas;l++)
    {
        dibujarLinea("pink",l*(300/lineas),300,300,300-((l+1)*(300/lineas)));
        dibujarLinea("black",300,l*(300/lineas),(l+1)*(300/lineas),0);
        dibujarLinea("yellow",0,l*(300/lineas),300-((l+1)*(300/lineas)),0);

    }
}

var d=document.getElementById("dibujito");
var lienzo=d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}


