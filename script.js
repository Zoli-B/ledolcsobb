document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Köszönjük, hogy felvette velünk a kapcsolatot!");
});

const products = {
    "led-strip": {
        title: "LED szalagok",
        image: "led-strip.jpg",
        description: "Rugalmas és energiatakarékos megoldások, amelyek tökéletesek otthonok és irodák világítására.",
        details: "A LED szalagok testreszabható hosszúságúak és színes világítást kínálnak."
    },
    "smart-bulb": {
        title: "Okos izzók",
        image: "smart-bulb.jpg",
        description: "Vezéreld távolról az okostelefonoddal, és élvezd a modern világítást.",
        details: "Az okos izzók kompatibilisek Alexa, Google Assistant és más eszközökkel."
    },
    "led-panel": {
        title: "LED panelek",
        image: "led-panel.jpg",
        description: "Elegáns és modern világítás, amely bármilyen helyiséget kiemel.",
        details: "A LED panelek energiatakarékos megoldások kiváló fényeloszlással."
    }
};
//RGB szalag animáció
function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateLEDColors() {
    const ledEffect = document.querySelector('.led-effect::before');
    const newColor = `linear-gradient(90deg, ${generateRandomColor()}, ${generateRandomColor()}, ${generateRandomColor()})`;
    ledEffect.style.background = newColor;
}

//RGB Háttér szuper Diszkó szemrák
/*setInterval(updateLEDColors, 5000);

let colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
let currentIndex = 0;

function changeBackground() {
    document.body.style.background = `linear-gradient(90deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
    currentIndex = (currentIndex + 1) % colors.length;
}


setInterval(changeBackground, 2000);*/

