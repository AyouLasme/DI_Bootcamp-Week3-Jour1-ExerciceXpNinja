/**
 * @author: LASME Ayou Emeline
 * @description:
 */

// Créez une fonction appelée createCalendar(year, month)
function createCalendar(year, month) {
    //  la date du premier jour du mois
    let premierJour = new Date(year, month, 1);

    // le numéro du jour de la semaine 
    let premierJourDeLaSemaine = premierJour.getDay();

    // Si le premier jour tombe un dimanche, mettre à jour le numéro du jour de la semaine 
    if (premierJourDeLaSemaine === 0) {
        premierJourDeLaSemaine = 7;
    }

    //  le nombre de jours dans le mois
    let numeroDuJour = new Date(year, month + 1, 0).getDate();

    // Créer un tableau pour stocker le calendrier
    let calendrier = [];

    // Créer le titre du calendrier (noms des jours de la semaine)
    let joursDeLaSemaine = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    let titre = `<tr><th>${joursDeLaSemaine.join("</th><th>")}</th></tr>`;
    let listeTitre = document.querySelectorAll("titre");

    calendrier.push(titre);

    // Créer une ligne vide pour le premier jour du mois (pour aligner le calendrier correctement)
    let cellule = "";
    for (let i = 1; i < premierJourDeLaSemaine; i++) {
        cellule += "<td></td>";
    }

    // Créer le reste du calendrier
    let jourActuel = 1;
    while (jourActuel <= numeroDuJour) {
        let ligne = "<tr>";
        for (let i = 1; i <= 7; i++) {
            if (jourActuel > numeroDuJour) {
                ligne += "<td></td>";
            } else {
                ligne += `<td>${jourActuel}</td>`;
                jourActuel++;
            }
        }
        ligne += "</tr>";
        calendrier.push(ligne);
    }

    // Créer le tableau HTML et le retourner
    return `<table>${calendrier.join("")}</table>`;
}  

let annee = prompt("Entrer une Annee (ex: AAAA)")
let jour = prompt("Entrer le jour (ex: JJ)")
let htmlCalendrier = createCalendar(`${annee}`,`${jour}`);
document.body.innerHTML = htmlCalendrier;