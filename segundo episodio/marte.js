var peso = prompt("Cual es tu peso?");
var planeta = parseInt(prompt("Elige tu planeta.\n1 es marte, 2 es jupiter"));
var g_tierra =9.8;
var g_marte =3.7;
var g_jupiter =24.8;
var nomplaneta;
var peso_final;
if(planeta==1){
    nomplaneta="Tu peso en Marte es: ";
    peso_marte= peso*g_marte/g_tierra;
    peso_final = peso_marte.toFixed(2)+"kilos";
}
else if(planeta==2){
    nomplaneta="Tu peso en Jupiter es: ";
    peso_jupiter= peso*g_jupiter/g_tierra;
    peso_final = peso_jupiter.toFixed(2)+" kilos";
}
else{
    nomplaneta="No escogiste ningun planeta";
    peso_final=null;
}
document.writeln("<strong>"+nomplaneta+"</strong><strong>"+peso_final+"</strong>");
