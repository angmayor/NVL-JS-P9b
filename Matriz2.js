//Dias del concierto
var dias = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo"
var arraydias = dias.split(",");
/*console.log(arraydias);*/

//Lugares del concierto
var lugar = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti"
var arraylugar = lugar.split(".");
/*console.log(arraylugar);*/

//Fechas y lugares de concierto
/*console.log(arraylugar[0]);
console.log(arraydias[0]);*/

//Array con el primer elemento los dias de semana y segundo elemento lugares

var diasYLugar = arraydias.concat(arraylugar);
/*console.log(diasYLugar);*/ 

var i = 0;
var conciertos = [];


while (i < arraydias.length) {
	conciertos.push([arraydias[i],arraylugar[i]]);
	i++;
}
console.log("Esto es todo el array " + conciertos);

console.log("Esto es solo unos dias " + conciertos[0] + " => " + conciertos[1]);
// Array de dias y lugares de concierto 1 x 1

var i = 0;
while (i < conciertos.length) {

	document.write('El '+conciertos[i][0]+' hay concierto en '+conciertos[i][1]+' <br>');

	i++;
}