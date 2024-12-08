const products = {
    "led-strip": {
        title: "LED szalagok",
        image: "led-strip.jpg",
        description: "Rugalmas és energiatakarékos megoldások.",
        details: "Testreszabható hosszúságú és színes világítást kínál.",
        examples: [
            { name: "RGB LED szalag", image: "led-strip-rgb.jpg", description: "Színes RGB szalag, távirányítóval." },
            { name: "Meleg fehér LED szalag", image: "led-strip-warm.jpg", description: "Kellemes meleg fényű LED szalag." },
            { name: "Hideg fehér LED szalag", image: "led-strip-cold.jpg", description: "Modern hideg fehér fényű szalag." },
            { name: "Led tápegység", image:"led-power-s.jpg", description: "Minőségi, megbízható ledtápegység"}
        ]
    },
    "smart-bulb": {
        title: "Okos izzók",
        image: "smart-bulb.jpg",
        description: "Vezéreld távolról az okostelefonoddal.",
        details: "Kompatibilisek Alexa és Google Assistant eszközökkel.",
        examples: [
            { name: "Wi-Fi RGB izzó", image: "smart-bulb-rgb.jpg", description: "Színes Wi-Fi vezérelt izzó." },
            { name: "Bluetooth okos izzó", image: "smart-bulb-bt.jpg", description: "Bluetooth kapcsolattal vezérelhető izzó." },
            { name: "Meleg fehér okos izzó", image: "smart-bulb-warm.jpg", description: "Kellemes meleg fehér fényű okos izzó." }
        ]
    },
    "led-panel": {
        title: "LED panelek",
        image: "led-panel.jpg",
        description: "Elegáns és modern világítás.",
        details: "Energiatakarékos megoldás kiváló fényeloszlással.",
        examples: [
            { name: "Négyszögletes LED panel", image: "led-panel-square.jpg", description: "Klasszikus négyzet alakú panel." },
            { name: "Kör alakú LED panel", image: "led-panel-round.jpg", description: "Modern kör alakú panel." },
            { name: "Süllyesztett LED panel", image: "led-panel-recessed.jpg", description: "Diszkréten beépíthető panel." }
        ]
    }
};


// URL paraméterek kezelése
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// Ellenőrizzük, hogy létezik-e a termék
if (productId && products[productId]) {
    const product = products[productId];

    // Termékadatok megjelenítése
    document.getElementById("product-title").textContent = product.title;
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("product-details").textContent = product.details;

    // Példák hozzáadása
    const exampleList = document.getElementById("example-list");
    product.examples.forEach(example => {
        const exampleCard = document.createElement("div");
        exampleCard.className = "col-md-4";
        exampleCard.innerHTML = `
            <div class="card h-100">
                <img src="${example.image}" class="card-img-top" alt="${example.name}">
                <div class="card-body">
                    <h5 class="card-title">${example.name}</h5>
                    <p class="card-text">${example.description}</p>
                </div>
            </div>
        `;
        exampleList.appendChild(exampleCard);
    });
} else {
    document.body.innerHTML = "<h1 class='text-center py-5'>A keresett termék nem található!</h1>";
}
