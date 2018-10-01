/*jshint esversion: 6 */

/*
FASE 2:
Volem millorar el software perquè el propulsor tingui una potència màxima.
Modifiquem en el main anterior:
Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà tres propulsors (potència màxima: 10,30,80)
i el segon sis propulsors (potència màxima: 30,40,50,50,30,10).
Mostrar a pantalla el codi dels coets, el número de propulsors que té i la potència màxima de cada propulsor.

Output:
32WESSDS: 10,30,80
LDSFJA32: 30,40,50,50,30,10
*/

var rocket1Id = ["Rocket 1", "32WESSDS"];
var rocket2Id = ["Rocket 2", "LDSFJA32"];

var rocket1MaxPower = [10,30,80];
var rocket2MaxPower = [30,40,50,50,30,10];

var rocket1PropellersNum = rocket1MaxPower.length;
var rocket2PropellersNum = rocket2MaxPower.length;

const rocket1 = new Rocket(...rocket1Id, rocket1PropellersNum, ...rocket1MaxPower);
const rocket2 = new Rocket(...rocket2Id, rocket2PropellersNum, ...rocket2MaxPower);

//console.log(rocket1);

function showData(rocket) {
  var newDiv = document.createElement("div");
  newDiv.id = rocket.rocketName;
  newDiv.innerHTML = '<p>' + rocket.rocketName + '<br>Serial: ' + rocket.serialNum + '<br>Propellers: ' + rocket.propellersNum + '<br>Each Propeller MaxPower: ' + rocket.rocketMaxPower + '</p>';
  document.getElementById('main').appendChild(newDiv);
}

showData(rocket1);
showData(rocket2);
