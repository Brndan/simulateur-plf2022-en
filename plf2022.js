
// déclaration des variables globales

const salaireBrutMoy2d = 76701;
const salaireBrutMoy1d = 63625;
const salaireBrutMoyAesh = 1.4 * 750;

const suppressionPostesBlanquer2d = 8000;
const enseignants2d = 391 * 1e3;
const nbAesh = 142 * 1e3;
const etpAESH = 77584;

const departements = 101;

let augmentationBudget = 0;


// Indiquer le résultat final
function printResult(montant) {
  document.getElementById('resultat').textContent = montant;
  let arrondi = montant / 1e9;
  document.getElementById('milliards').textContent = Math.round(arrondi*1000)/1000;
}


// Gestion des suppressions de postes dans le 2d degré
function suppressionPostes2d(case_cochee) {
  let cout8000postes2d = suppressionPostesBlanquer2d*salaireBrutMoy2d;
  if (case_cochee.checked) {
    augmentationBudget += cout8000postes2d;
  } else {
    augmentationBudget -= cout8000postes2d;
  }
  printResult(augmentationBudget);
}

// Augmenter les postes de 10% le 2d degré
function diminuerEffectifs2d(case_cochee) {
  let coutProfsEnPlus = (enseignants2d / 10) * salaireBrutMoy2d;
  if (case_cochee.checked) {
    augmentationBudget += coutProfsEnPlus;
  } else {
    augmentationBudget -= coutProfsEnPlus;
  }
  printResult(augmentationBudget);
}


// AESH à temps plein
function aeshTempsPlein(case_cochee) {
  let coutAeshActuel = salaireBrutMoyAesh * nbAesh ;
  let coutAeshTempsPlein = Math.round(coutAeshActuel * (nbAesh / etpAESH));
  if (case_cochee.checked) {
    augmentationBudget += coutAeshTempsPlein;
  } else {
    augmentationBudget -= coutAeshTempsPlein;
  }
  printResult(augmentationBudget);
}

// Gestion des directions
function dechargesDirection(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
}

// RASED
function remonterRased(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
}


// Gestion des remplaçant⋅es 1d
function augmenterRemplacement1d(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
}

// Gestion référent⋅es égalité
function refEgalite(case_cochee) {
  let coutrefEgalite = departements * salaireBrutMoy2d;
  if (case_cochee.checked) {
    augmentationBudget += coutrefEgalite;
  } else {
    augmentationBudget -= coutrefEgalite;
  }
  printResult(augmentationBudget);
}

// Gestion référent⋅es écologie
function refEcologie(case_cochee) {
  let coutrefAntisexisme = departements * salaireBrutMoy2d;
  if (case_cochee.checked) {
    augmentationBudget += coutrefAntisexisme;
  } else {
    augmentationBudget -= coutrefAntisexisme;
  }
  printResult(augmentationBudget);
}

/* Gestionnaire d’événements */

// Événement pour les suppressions de postes dans le 2d degré
const suppr2d = document.querySelector('input[id="suppr2d"]');
suppr2d.addEventListener("change", (event) => {
  suppressionPostes2d(suppr2d);
});


// Événement pour les réductions d’effectifs dans le 2d degré
const effectifs2d = document.querySelector('input[id="effectifs2d"]');
effectifs2d.addEventListener("change", (event) => {
  diminuerEffectifs2d(effectifs2d);
});

// Événement pour les AESH à temps plein
const aesh = document.querySelector('input[id="aesh"]');
aesh.addEventListener("change", (event) => {
  aeshTempsPlein(aesh);
});

// Événement pour les décharges de direction 
const direction = document.querySelector('input[id="direction"]');
direction.addEventListener("change", (event) => {
  dechargesDirection(direction);
});

// Événement pour les RASED 
const rased = document.querySelector('input[id="rased"]');
rased.addEventListener("change", (event) => {
  remonterRased(rased);
});


// Événement pour le remplacement 1er degré
const remplacement1d = document.querySelector('input[id="remplacement1d"]');
remplacement1d.addEventListener("change", (event) => {
  augmenterRemplacement1d(remplacement1d);
});

// Évenement pour les refs antisexisme
const refantisexisme = document.querySelector('input[id="referenteEgalite"]');
refantisexisme.addEventListener("change", (event) => {
  refEgalite(refantisexisme);
});

// Évenement pour les refs écologie
const refecolo = document.querySelector('input[id="referenteEcologie"]');
refecolo.addEventListener("change", (event) => {
  refEcologie(refecolo);
});