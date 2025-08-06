var teclas = {//SE CREA UN OBJETO DE TIPO JSON
    UP: 38, LEFT:37 , DOWN:40 ,RIGHT:39
 };
console.log(teclas);
document.addEventListener("keydown", dibujarTeclado);
var colorflecha = "blue";
var movimiento = 10; 
var x = 100;
var y = 100;
function dibujarTeclado(evento)
{
    
    //if(evento.keyCode == teclas.UP){ console.log("arriba");}
    switch(evento.keyCode){
        case teclas.DOWN:
            dibujarLinea(colorflecha, x, y, x, y+ movimiento, papel);
            y= y +movimiento;
            break;
        case teclas.UP:
            dibujarLinea(colorflecha, x, y, x, y- movimiento, papel);
            y=y-movimiento;
            break;
        case teclas.LEFT:
            dibujarLinea(colorflecha, x, y, x-movimiento, y, papel);
            x= x-movimiento;
            break; 
        case teclas.RIGHT:
            dibujarLinea(colorflecha, x, y, x+movimiento, y, papel);
            x=x+movimiento;
            break;
        default:
            console.log("otra tecla");
            break;

    }
}

var cuadrito=document.getElementById("area_de_dibujo");
var papel=cuadrito.getContext("2d");


dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal,lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
