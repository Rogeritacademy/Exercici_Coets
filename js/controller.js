/*jshint esversion: 6 */


/*
FASE 1:
Volem fer un software de carreres de coets.
Un coet està identificat per un codi de 8 caràcters i un número de propulsors.
Realitza els següents passos:
Creem dos coets amb els codis “32WESSDS” i “LDSFJA32”. El primer coet tindrà tres propulsors i el segon sis propulsors.
Mostrar a pantalla el codi dels coets i el número de propulsors que té.
*/

const rocket1 = new Rocket("Rocket1", "32WESSDS", "3");
const rocket2 = new Rocket("Rocket2", "LDSFJA32", "6");

rocket1.showData();
rocket2.showData();
