// Questions du test DISC - chaque question présente un adjectif pour chaque type
const questions = [
    {
        D: "Stratège et entreprenant",
        I: "Influent et démonstratif",
        S: "Loyal et attentif à autrui",
        C: "Prudent et réfléchi"
    },
    {
        D: "Méthodique et logique",
        I: "Sociable et familier",
        S: "Honnête et discret",
        C: "Énergique et orienté vers les résultats"
    },
    {
        D: "Déterminé et aimant diriger",
        I: "Enjoué et rayonnant",
        S: "Calme et d'humeur égale",
        C: "Formaliste et factuel"
    },
    {
        D: "Sûr de lui et volontaire",
        I: "Loquace et de bonne humeur",
        S: "Familier et stable",
        C: "Ordonné et concis"
    },
    {
        D: "Exigeant et direct",
        I: "Actif et liant",
        S: "Constant et attaché aux valeurs",
        C: "Perspicace et impartial"
    },
    {
        D: "Puissant et sûr de lui",
        I: "Plein d'espoir et expressif",
        S: "Accommodant et serviable",
        C: "Pensif et maître de soi"
    },
    {
        D: "Ferme et entreprenant",
        I: "Ouvert et persuasif",
        S: "Appliqué et sélectif dans ses relations",
        C: "Posé et dynamique"
    },
    {
        D: "Déterminé et résolu",
        I: "Avenant et jovial",
        S: "Sensible et amical",
        C: "Logique et correct"
    },
    {
        D: "Orienté résultats et rapidité",
        I: "Encourageant et ouvert aux idées",
        S: "Compatissant et diplomate",
        C: "Précis et mesuré"
    },
    {
        D: "Responsable et ferme",
        I: "Expansif et imaginatif",
        S: "Réservé et coopératif",
        C: "Méticuleux et minutieux"
    },
    {
        D: "Opiniâtre et visant le résultat",
        I: "Esprit d'équipe et spontané",
        S: "Aimable et prévenant",
        C: "Contrôlé et rationnel"
    },
    {
        D: "Exigeant et solide",
        I: "Amical et divertissant",
        S: "Modeste et fidèle",
        C: "Analyste et sceptique"
    },
    {
        D: "Actif et contrôlant",
        I: "Affectif et confiant",
        S: "Attaché à ses proches et calme",
        C: "Observateur et distant"
    },
    {
        D: "Volontaire et tenace",
        I: "Enthousiaste et attachant",
        S: "Impliqué et consensuel",
        C: "Conforme et sans parti pris"
    },
    {
        D: "Ferme et tranchant",
        I: "Jovial et populaire",
        S: "Modérateur et apaisant",
        C: "Formel et à principe"
    },
    {
        D: "Décideur et pressé",
        I: "Animé et persuasif",
        S: "Tolérant et calme",
        C: "Analytique et aimant la discipline"
    },
    {
        D: "Orienté résultats et prêt au défi",
        I: "Ouvert aux idées et arrangeant",
        S: "Patient et empathique",
        C: "Logique et mesuré"
    },
    {
        D: "Opiniâtre et déterminé",
        I: "Influent et décontracté",
        S: "Discret et philosophe",
        C: "Réfléchi et circonspect",
    },
    {
        D: "Courageux et autonome",
        I: "Extraverti et communicatif",
        S: "Bienveillant et de bon conseil",
        C: "Axé procédure et bien préparé"
    },
    {
        D: "Puissant et clair",
        I: "Spontané et vif",
        S: "Paisible et aimant l'harmonie",
        C: "Studieux et raisonné"
    },
    {
        D: "Argumenté et sûr de lui",
        I: "Interactif et ouvert",
        S: "Patient et serviable",
        C: "Organisé et prudent"
    },
    {
        D: "Indépendant et audacieux",
        I: "Aimable et vivant",
        S: "Souple et harmonieux",
        C: "Factuel et respectueux des normes"
    },
    {
        D: "Directif et réaliste",
        I: "Démonstratif et enthousiaste",
        S: "Compatissant et prévenant",
        C: "Attentif et soucieux du détail"
    },
    {
        D: "Objectif et hardi",
        I: "Sociable et bon vivant",
        S: "Stable et altruiste",
        C: "Consciencieux et introspectif"
    },
    {
        D: "Direct et carré",
        I: "Expressif et radieux",
        S: "Tolérant et ferme",
        C: "Détaillé et précautionneux"
    },
];

// Descriptions des profils DISC
const descriptions = {
    D: "Dominant (Rouge): Vous êtes direct, décisif et orienté vers les résultats. Vous aimez relever des défis, prendre des décisions et être aux commandes.",
    I: "Influent (Jaune): Vous êtes enthousiaste, expressif et sociable. Vous aimez interagir avec les autres, partager des idées et inspirer l'enthousiasme.",
    S: "Stable (Vert): Vous êtes patient, loyal et fiable. Vous préférez la coopération, la stabilité et valorisez les relations harmonieuses.",
    C: "Conforme (Bleu): Vous êtes précis, analytique et soucieux des détails. Vous appréciez la qualité, l'exactitude et les procédures bien définies."
};

// Variables de gestion du test
let currentQuestion = 0;
let scores = { D: 0, I: 0, S: 0, C: 0 };
// Tableau pour stocker les réponses de l'utilisateur
let userAnswers = [];

// Éléments du DOM
const optionDButton = document.getElementById('option-D');
const optionIButton = document.getElementById('option-I');
const optionSButton = document.getElementById('option-S');
const optionCButton = document.getElementById('option-C');
const questionNumber = document.getElementById('question-number');
const progressBar = document.getElementById('progress');
const testSection = document.getElementById('test');
const resultsSection = document.getElementById('results');
const restartButton = document.getElementById('restart');
const previousButton = document.getElementById('previous-question');

// Fonction pour mélanger les options
function shuffleOptions() {
    const optionsContainer = document.querySelector('.options');
    const options = Array.from(optionsContainer.children);

    // Algorithme de Fisher-Yates pour mélanger le tableau
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        optionsContainer.appendChild(options[j]);
    }
}

// Modifier la fonction displayQuestion pour inclure le mélange
function displayQuestion() {
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        optionDButton.textContent = question.D;
        optionIButton.textContent = question.I;
        optionSButton.textContent = question.S;
        optionCButton.textContent = question.C;
        questionNumber.textContent = `Question ${currentQuestion + 1}/${questions.length}`;
        progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;

        // Afficher/masquer le bouton précédent
        previousButton.style.display = currentQuestion > 0 ? 'inline-block' : 'none';

        // Mélanger l'ordre des options
        shuffleOptions();
    } else {
        showResults();
    }
}

// Fonction pour enregistrer la réponse et passer à la question suivante
function recordAnswer(type) {
    scores[type]++;
    userAnswers[currentQuestion] = type;
    currentQuestion++;
    displayQuestion();
}

// Fonction pour revenir à la question précédente
function goToPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        // Décrémenter le score de la réponse précédente
        const previousAnswer = userAnswers[currentQuestion];
        if (previousAnswer) {
            scores[previousAnswer]--;
        }
        displayQuestion();
    }
}

// Fonction pour afficher les résultats
function showResults() {
    testSection.style.display = 'none';
    resultsSection.style.display = 'block';

    const total = questions.length;
    const dPercent = (scores.D / total) * 100;
    const iPercent = (scores.I / total) * 100;
    const sPercent = (scores.S / total) * 100;
    const cPercent = (scores.C / total) * 100;

    document.getElementById('d-bar').style.height = `${dPercent}%`;
    document.getElementById('i-bar').style.height = `${iPercent}%`;
    document.getElementById('s-bar').style.height = `${sPercent}%`;
    document.getElementById('c-bar').style.height = `${cPercent}%`;

    // Déterminer le type principal
    const primaryType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById('primary-type').innerHTML = `
        <h3>Votre profil dominant: ${primaryType}</h3>
        <p>${descriptions[primaryType]}</p>
        <p>Répartition: D: ${scores.D} (${Math.round(dPercent)}%),
           I: ${scores.I} (${Math.round(iPercent)}%),
           S: ${scores.S} (${Math.round(sPercent)}%),
           C: ${scores.C} (${Math.round(cPercent)}%)</p>
    `;
}

// Initialiser les événements
previousButton.addEventListener('click', goToPreviousQuestion);
optionDButton.addEventListener('click', () => recordAnswer("D"));
optionIButton.addEventListener('click', () => recordAnswer("I"));
optionSButton.addEventListener('click', () => recordAnswer("S"));
optionCButton.addEventListener('click', () => recordAnswer("C"));

// Réinitialiser également userAnswers lors du redémarrage
restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    scores = { D: 0, I: 0, S: 0, C: 0 };
    userAnswers = [];
    testSection.style.display = 'block';
    resultsSection.style.display = 'none';
    displayQuestion();
});

// Démarrer le test
displayQuestion();