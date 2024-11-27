let canvas = document.getElementById("stadiumCanvas");
let ctx = canvas.getContext("2d");
let elements = [];

// Función para dibujar el estadio
function drawStadium() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Césped
    ctx.fillStyle = "#32CD32";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Elementos del estadio
    elements.forEach(el => {
        ctx.save();
        ctx.translate(el.x + el.width / 2, el.y + el.height / 2); // Centro del elemento
        ctx.rotate(el.rotation);
        ctx.fillStyle = el.color;
        ctx.fillRect(-el.width / 2, -el.height / 2, el.width, el.height);
        ctx.restore();
    });
}

// Funciones para añadir elementos
function addSeats() {
    elements.push({
        x: Math.random() * (canvas.width - 150),
        y: Math.random() * (canvas.height - 100),
        width: 150,
        height: 50,
        color: "#FF4500",
        rotation: 0
    });
    drawStadium();
}

function addGoal() {
    elements.push({
        x: canvas.width / 2 - 50,
        y: canvas.height - 30,
        width: 100,
        height: 10,
        color: "#FFFFFF",
        rotation: 0
    });
    drawStadium();
}

function addTower() {
    elements.push({
        x: Math.random() * (canvas.width - 50),
        y: Math.random() * (canvas.height - 200),
        width: 20,
        height: 100,
        color: "#FFD700",
        rotation: 0
    });
    drawStadium();
}

function addScreen() {
    elements.push({
        x: Math.random() * (canvas.width - 200),
        y: 10,
        width: 150,
        height: 75,
        color: "#000000",
        rotation: 0
    });
    drawStadium();
}

// Funciones de interacción
function changeColor() {
    elements.forEach(el => {
        el.color = el.color === "#FF4500" ? "#1E90FF" : "#FF4500";
    });
    drawStadium();
}

function rotateElement() {
    if (elements.length > 0) {
        elements[elements.length - 1].rotation += Math.PI / 8; // Rotar último elemento
        drawStadium();
    }
}

function resetStadium() {
    elements = [];
    drawStadium();
}

function randomStadium() {
    resetStadium();
    for (let i = 0; i < 10; i++) addSeats();
    for (let i = 0; i < 2; i++) addGoal();
    for (let i = 0; i < 4; i++) addTower();
    for (let i = 0; i < 2; i++) addScreen();
}

drawStadium();

