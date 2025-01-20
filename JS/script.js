
function init()
{
    const buttons = document.querySelectorAll("#selection button");
    console.log(buttons);
    const projets = document.querySelectorAll(".projet");
    console.log(projets);
    
    //On vérifie chaque projet pour voir lequel on affiche
    buttons.forEach(button =>
    {
        button.addEventListener("click",(evt) => {
            const filtre =button.getAttribute("cat");
            buttons.forEach((button) => {
                button.classList=[];
            });
            button.classList="active";

            
            //console.log(filtre);
            //console.log(Taille);

            var Selected =[];
            //parcours du projet
            projets.forEach(projet =>
            {
                const category = projet.getAttribute("cat");
                if(filtre==="*" || category.includes(filtre))
                {
                    projet.style.display="block";
                    Selected.push(projet);  //Ajout du projet dans celui séléctionné
                }
                else
                {
                    projet.style.display="none";
                }
            });

            //Séléction de l'agencement des boîtes
            switch(filtre)
            {
                case "Draw" :
                    var Taille = [[2,5],[4,7],[3,4],[4,4],[2,5],[4,4],[2,4],[4,4],[2,4]];
                case "3D" :
                    var Taille = [[15,12]];
                    //conteneur.style.gridTemplateRows = "repeat(10, 1fr)";
                    break;
                case "Dev" :
                    var Taille = [[7,12],[6,12]];
                    //conteneur.style.gridTemplateRows = "repeat(10, 1fr)";
                    break;
                case "Cam" :
                    var Taille = [[3,7]];
                    //conteneur.style.gridTemplateRows = "repeat(10, 1fr)";
                    break;
                default :
                    var Taille = [[3,6],[3,6],[3,6],[4,6],[4,6],[3,6],[2,5],[3,3],[3,4],[3,5],[2,3],[2,4]];
            }
            console.log(Taille);
            Selected.forEach((projet,index) =>
                {
                    projet.style.gridArea="span "+Taille[index][0]+" / span " +Taille[index][1];
                });
            });
    });
}

/*
Grid *
hauteur / Largeur
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

