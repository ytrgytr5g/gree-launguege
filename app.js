
let score = 0;
let currentQuestion = 0;

const questions = [
    {
        question: "Ποιο είναι το σωστό άρθρο;",
        answers: ["ο", "η", "το", "τα"],
        correctAnswer: "ο"
    },
    {
        question: "Ποια είναι η σωστή κλίση του ρήματος 'γράφω' στον ενεστώτα;",
        answers: ["γράφω", "γράφεις", "γράφει", "γράφετε"],
        correctAnswer: "γράφω"
    }
    // Προσθέστε περισσότερες ερωτήσεις εδώ
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    answerButtons.forEach((btn, index) => {
        btn.textContent = question.answers[index];
        btn.onclick = () => checkAnswer(question.answers[index]);
    });
}

function checkAnswer(answer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (answer === correctAnswer) {
        score++;
        alert("Σωστή απάντηση!");
    } else {
        alert("Λανθασμένη απάντηση!");
    }

    scoreElement.textContent = score;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert("Το παιχνίδι τελείωσε!");
    }
}

// Εμφάνιση Avatar με Three.js
function initAvatar() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 300);
    document.getElementById("avatar-container").appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const avatar = new THREE.Mesh(geometry, material);
    scene.add(avatar);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        avatar.rotation.x += 0.01;
        avatar.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

initAvatar();
loadQuestion();
