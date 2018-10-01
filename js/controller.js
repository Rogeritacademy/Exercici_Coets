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

let rocket1MaxPower = [10,30,80];
let rocket2MaxPower = [30,40,50,50,30,10];

const rocket1 = new Rocket("Rocket1", "32WESSDS", "3");
const rocket2 = new Rocket("Rocket2", "LDSFJA32", "6");

function showData(rocket) {
  var newDiv = document.createElement("div");
  newDiv.id = rocket.rocketName;
  newDiv.innerHTML = '<p>' + rocket.rocketName + '<br>Serial: ' + rocket.serialNum + '<br>Propellers: ' + rocket.propellersNum + '</p>';
  document.getElementById('main').appendChild(newDiv);
}

showData(rocket1);
showData(rocket2);
