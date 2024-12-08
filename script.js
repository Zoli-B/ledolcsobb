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
