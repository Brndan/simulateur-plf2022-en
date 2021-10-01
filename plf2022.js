
// déclaration des variables globales

const salaireBrutMoy2d = 76701;
const salaireBrutMoy1d = 63625;
const suppressionPostesBlanquer2d = 8000;
const enseignants2d = 391 * 1e3;

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

// Gestion des suppressions de postes dans le 2d degré
function diminuerEffectifs2d(case_cochee) {
  let coutProfsEnPlus = (enseignants2d / 10) * salaireBrutMoy2d;
  if (case_cochee.checked) {
    augmentationBudget += coutProfsEnPlus;
  } else {
    augmentationBudget -= coutProfsEnPlus;
  }
  printResult(augmentationBudget);
}


// Gestion des suppressions de postes dans le 2d degré
function aeshTempsPlein(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
}

// Gestion des suppressions de postes dans le 2d degré
function dechargesDirection(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
}

// Gestion des suppressions de postes dans le 2d degré
function remonterRased(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
}


// Gestion des suppressions de postes dans le 2d degré
function augmenterRemplacement1d(case_cochee) {
  if (case_cochee.checked) {
    console.log("vous avez coché la case");
  } else {
    console.log("vous avez décoché la case");
  }
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