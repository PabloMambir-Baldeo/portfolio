
function init() {
    const buttons = document.querySelectorAll("#selection button");
    console.log(buttons);
    const projets = document.querySelectorAll(".projet");
    console.log(projets);

    compteur = 0;

    buttons.forEach(button => {
        button.addEventListener("click",() => {
            const filtre =button.getAttribute("cat");
            projets.forEach(projet=>{
                const category = projet.getAttribute("cat");
                if(filtre==="*" || category.includes(filtre)) {
                    projet.style.display="block";
                }
                else {
                    projet.style.display="none";
                }

            })
        })
    });
}

/*
Grid *
grid-area: span 2 / span 4;
grid-area: span 4 / span 4;
grid-area: span 3 / span 4;

grid-area: span 4 / span 4;
grid-area: span 3 / span 4;
grid-area: span 4 / span 4;

grid-area: span 2 / span 4;

grid-area: span 4 / span 4;
grid-area: span 4 / span 4;
grid-area: span 2 / span 4;
grid-area: span 6 / span 4;

grid-area: span 3 / span 4;
grid-area: span 2 / span 8;
grid-area: span 4 / span 7;
grid-area: span 4 / span 5;
*/

