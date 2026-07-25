// Open the map
const openBtn = document.getElementById("openMap");
const overlay = document.querySelector(".overlay");

openBtn.addEventListener("click", () => {
    overlay.classList.add("hide");
});

// Information for each location
function showInfo(place) {

    const title = document.getElementById("title");
    const description = document.getElementById("description");

    switch(place){

        case "hall":
            title.innerHTML = "🏰 Great Hall";
            description.innerHTML =
            "The Great Hall is the heart of Hogwarts where students gather for meals, celebrations, and the famous Sorting Ceremony. The enchanted ceiling reflects the sky above, creating a magical atmosphere.";
            break;

        case "library":
            title.innerHTML = "📚 Library";
            description.innerHTML =
            "The Hogwarts Library contains thousands of magical books, ancient scrolls, and forbidden knowledge. Many students visit to study, while others search for hidden secrets.";
            break;

        case "potions":
            title.innerHTML = "🧪 Potions Classroom";
            description.innerHTML =
            "Brewing potions requires patience, precision, and courage. Students learn to combine magical ingredients to create powerful mixtures with unique effects.";
            break;

        case "tower":
            title.innerHTML = "🔭 Astronomy Tower";
            description.innerHTML =
            "The tallest tower in Hogwarts where students observe the stars, planets, and constellations during Astronomy lessons.";
            break;

        case "forest":
            title.innerHTML = "🌲 Forbidden Forest";
            description.innerHTML =
            "A mysterious forest filled with magical creatures, hidden paths, and ancient secrets. Many adventures begin here, but only the brave dare to enter.";
            break;

        case "houses":
            title.innerHTML = "🏆 Hogwarts Houses";
            description.innerHTML =
            "Gryffindor values bravery. Ravenclaw values wisdom. Hufflepuff values loyalty. Slytherin values ambition. Every witch and wizard finds a place to belong.";
            break;
    }
}

// Magical sparkle effect
document.addEventListener("mousemove", function(e){

    const sparkle = document.createElement("div");

    sparkle.innerHTML = "✨";
    sparkle.style.position = "fixed";
    sparkle.style.left = e.clientX + "px";
    sparkle.style.top = e.clientY + "px";
    sparkle.style.pointerEvents = "none";
    sparkle.style.fontSize = "12px";
    sparkle.style.opacity = "1";
    sparkle.style.transition = "all .8s ease";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.style.transform = "translateY(-25px)";
        sparkle.style.opacity = "0";
    }, 10);

    setTimeout(() => {
        sparkle.remove();
    }, 800);

});
