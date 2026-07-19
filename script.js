let livres = JSON.parse(localStorage.getItem("livres")) || [];

const titre = document.getElementById("titre");
const auteur = document.getElementById("auteur");
const pages = document.getElementById("pages");
const prix = document.getElementById("prix");
const recherche = document.getElementById("recherche");

const listeLivres = document.getElementById("listeLivres");
const nbLivres = document.getElementById("nbLivres");
const prixTotal = document.getElementById("prixTotal");
const prixMoyen = document.getElementById("prixMoyen");

let indexModification = -1;

// Affichage
function afficherLivres(filtre = "") {

    listeLivres.innerHTML = "";

    const resultat = livres.filter(livre =>
        livre.titre.toLowerCase().includes(filtre.toLowerCase()) ||
        livre.auteur.toLowerCase().includes(filtre.toLowerCase())
    );

    resultat.forEach((livre, index) => {

        listeLivres.innerHTML += `
            <div class="livre">
                <h3>${livre.titre}</h3>

                <p><b>Auteur :</b> ${livre.auteur}</p>

                <p><b>Pages :</b> ${livre.pages}</p>

                <p><b>Prix :</b> ${livre.prix} DH</p>

                <div class="actions">
                    <button class="edit" onclick="modifierLivre(${index})">
                        Modifier
                    </button>

                    <button class="delete" onclick="supprimerLivre(${index})">
                        Supprimer
                    </button>
                </div>
            </div>
        `;
    });

    statistiques();

    localStorage.setItem("livres", JSON.stringify(livres));
}

// Ajouter ou Modifier
document.getElementById("btnAjouter").addEventListener("click", () => {

    if (
        titre.value === "" ||
        auteur.value === "" ||
        pages.value === "" ||
        prix.value === ""
    ) {
        alert("Remplissez tous les champs.");
        return;
    }

    const livre = {
        titre: titre.value,
        auteur: auteur.value,
        pages: pages.value,
        prix: Number(prix.value)
    };

    if (indexModification === -1) {
        livres.push(livre);
    } else {
        livres[indexModification] = livre;
        indexModification = -1;
        document.getElementById("btnAjouter").textContent = "Ajouter";
    }

    vider();

    afficherLivres();
});

// Supprimer
function supprimerLivre(index) {

    if (confirm("Supprimer ce livre ?")) {

        livres.splice(index, 1);

        afficherLivres();
    }
}

// Modifier
function modifierLivre(index) {

    titre.value = livres[index].titre;
    auteur.value = livres[index].auteur;
    pages.value = livres[index].pages;
    prix.value = livres[index].prix;

    indexModification = index;

    document.getElementById("btnAjouter").textContent = "Enregistrer";
}

// Recherche
recherche.addEventListener("keyup", () => {

    afficherLivres(recherche.value);

});

// Vider formulaire
function vider() {

    titre.value = "";
    auteur.value = "";
    pages.value = "";
    prix.value = "";
}

// Statistiques
function statistiques() {

    nbLivres.textContent = livres.length;

    let total = 0;

    livres.forEach(livre => {

        total += livre.prix;

    });

    prixTotal.textContent = total.toFixed(2) + " DH";

    if (livres.length > 0) {

        prixMoyen.textContent = (total / livres.length).toFixed(2) + " DH";

    } else {

        prixMoyen.textContent = "0 DH";

    }
}

// Démarrage
afficherLivres();