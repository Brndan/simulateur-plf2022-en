
// déclaration des variables globales

const budget2022 = 78.1 * 1e9;

const salaireBrutMoy2d = 76701;
const salaireBrutMoy1d = 63625;
const salaireBrutMoyAesh = 1.4 * 750;

const stagiairesPe = 10190;
const stagiaires2d = 14000;
const suppressionPostesBlanquer2d = 8000;
const enseignants2d = 396 * 1e3;
const enseignants1d = 357 * 1e3;
const enseignants1dBaisseEffectifs = 27000;
const remplacantes1d = 30000;
const nbAesh = 125 * 1e3;
const etpAESH = 77584;
const rasedSupprimes = 5000;

const departements = 101;

let augmentationBudget = 0;


// Indiquer le résultat final
function printResult(montant) {
  document.getElementById('resultat').textContent = montant.toLocaleString();
  let arrondi = montant / 1e9;
  document.getElementById('milliards').textContent = (Math.round(arrondi * 1000) / 1000).toLocaleString();
  let pourcentageBudget = (montant / budget2022) * 100;
  document.getElementById('budgetPourCent').textContent = (Math.round(pourcentageBudget * 100) / 100).toLocaleString();
}




/* Gestionnaire d’événements */

// Événement pour les suppressions de postes dans le 2d degré
const stagiaires = document.querySelector('input[id="stagiaires"]');
stagiaires.addEventListener("change", () => {
  let budgetStagiaires = (stagiairesPe * salaireBrutMoy1d) + (stagiaires2d * salaireBrutMoy2d);
  if (stagiaires.checked) {
    augmentationBudget += budgetStagiaires;
  } else {
    augmentationBudget -= budgetStagiaires;
  }
  printResult(augmentationBudget);
});

// Suppressions de postes dans le 2d degré
const suppr2d = document.querySelector('input[id="suppr2d"]');
suppr2d.addEventListener("change", () => {
  let cout8000postes2d = suppressionPostesBlanquer2d * salaireBrutMoy2d;
  if (suppr2d.checked) {
    augmentationBudget += cout8000postes2d;
  } else {
    augmentationBudget -= cout8000postes2d;
  }
  printResult(augmentationBudget);
});


// Réductions d’effectifs dans le 2d degré
const effectifs2d = document.querySelector('input[id="effectifs2d"]');
effectifs2d.addEventListener("change", () => {
  let coutProfsEnPlus = (enseignants2d / 10) * salaireBrutMoy2d;
  if (effectifs2d.checked) {
    augmentationBudget += coutProfsEnPlus;
  } else {
    augmentationBudget -= coutProfsEnPlus;
  }
  printResult(augmentationBudget);
});

// Réductions d’effectifs dans le 1er degré
const effectifs1d = document.querySelector('input[id="effectifs1d"]');
effectifs1d.addEventListener("change", () => {
  let coutPeEnPlus = enseignants1dBaisseEffectifs * salaireBrutMoy1d;
  if (effectifs1d.checked) {
    augmentationBudget += coutPeEnPlus;
  } else {
    augmentationBudget -= coutPeEnPlus;
  }
  printResult(augmentationBudget);
});

// AESH à temps plein
const aesh = document.querySelector('input[id="aesh"]');
aesh.addEventListener("change", () => {
  let coutAeshActuel = salaireBrutMoyAesh * nbAesh;
  let coutAeshTempsPlein = Math.round(coutAeshActuel * (nbAesh / etpAESH));
  if (aesh.checked) {
    augmentationBudget += coutAeshTempsPlein;
  } else {
    augmentationBudget -= coutAeshTempsPlein;
  }
  printResult(augmentationBudget);
});


// RASED 
const rased = document.querySelector('input[id="rased"]');
rased.addEventListener("change", () => {
  let budgetRased = rasedSupprimes * salaireBrutMoy1d;
  if (rased.checked) {
    augmentationBudget += budgetRased;
  } else {
    augmentationBudget -= budgetRased;
  }
  printResult(augmentationBudget);
});

// Événement pour le remplacement 1er degré
const remplacement1d = document.querySelector('input[id="remplacement1d"]');
remplacement1d.addEventListener("change", () => {
  let budgetRemplacement1d = (remplacantes1d * 0.25) * salaireBrutMoy1d;
  if (remplacement1d.checked) {
    augmentationBudget += budgetRemplacement1d;
  } else {
    augmentationBudget -= budgetRemplacement1d;
  }
  printResult(augmentationBudget);
});

// 1 référent⋅e antisexisme par département
const refantisexisme = document.querySelector('input[id="referenteEgalite"]');
refantisexisme.addEventListener("change", () => {
  let coutrefEgalite = departements * salaireBrutMoy2d;
  if (refantisexisme.checked) {
    augmentationBudget += coutrefEgalite;
  } else {
    augmentationBudget -= coutrefEgalite;
  }
  printResult(augmentationBudget);
});

// 1 référent⋅e écologie par département
const refecolo = document.querySelector('input[id="referenteEcologie"]');
refecolo.addEventListener("change", () => {
  let coutrefAntisexisme = departements * salaireBrutMoy2d;
  if (refecolo.checked) {
    augmentationBudget += coutrefAntisexisme;
  } else {
    augmentationBudget -= coutrefAntisexisme;
  }
  printResult(augmentationBudget);
});
