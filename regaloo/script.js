const enterBtn = document.getElementById("enterBtn");

const hiddenMessage = document.getElementById("hiddenMessage");

const music = document.getElementById("bgMusic");

const mainContent = document.getElementById("mainContent");

enterBtn.addEventListener("click", async () => {

    hiddenMessage.classList.add("show");

    mainContent.style.display = "block";

    mainContent.scrollIntoView({
        behavior: "smooth"
    });

    try{

        await music.play();

    }catch(error){

        console.log(error);
    }

});


/* Animación fotos */

const cards = document.querySelectorAll(".photo-card");

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){

            card.classList.add("show");
        }

    });

});