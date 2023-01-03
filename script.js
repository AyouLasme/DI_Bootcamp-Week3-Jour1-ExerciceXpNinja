/**
 * @author: LASME Ayou Emeline
 * @description:
 */

// Créez une fonction appeléecreateCalendar(year, month)
function createCalendar(year, month) {
    let calendrier = document.createElement("table");
    let titre = document.createElement("caption");
    titre.innerHTML = `le calendrier du : ${month}/${year}`;
    calendrier.appendChild(titre);

    // Création des en-têtes de colonne avec les jours de la semaine Lundi, Mardi, Mercredi, Jeudi, vendredi, samedi et Dimanche
    let semaines = document.createElement("tr");
    let jours = ["L", "M", "M", "J", "V", "S", "D"];
    for (let jour of jours) {
        let jours = document.createElement("th");
        jours.innerHTML = jour;
        semaines.appendChild(jours);
    }
    calendrier.appendChild(semaines);

    // Obtention du premier jour du mois et du nombre de jours dans le mois
    let jour1 = new Date(year, month - 1, 1);
    let nuemeroDuJour = new Date(year, month, 0).getDate();

    // Calcul du nombre de semaines et de la première semaine partielle
    let numeroDeLaSemaine = Math.ceil((nuemeroDuJour + jour1.getDay()) / 7);
    let SemainePartielle = (7 - jour1.getDay()) % 7;

    // Création des lignes de semaine et des cellules de jour
    let jour = 1;
    for (let i = 0; i < numeroDeLaSemaine; i++) {
        let semaines = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let celluleDesJours = document.createElement("td");
            if (i === 0 && j < SemainePartielle || jour > nuemeroDuJour) {
                celluleDesJours.innerHTML = "&nbsp;";
            }else {
                celluleDesJours.innerHTML = jour;
                jour++;
            }
            semaines.appendChild(celluleDesJours);
        }
        calendrier.appendChild(semaines);
    }
    return calendrier;
}
let annee = prompt("Entrer une Annee (Ex: AAAA)")
let jour = prompt("Entrer le jour (Ex: JJ)")

let calendrier = createCalendar(`${annee}`,`${jour}`);
document.body.appendChild(calendrier);