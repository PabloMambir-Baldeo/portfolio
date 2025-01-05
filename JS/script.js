
function init()
{
    const buttons = document.querySelectorAll("#selection button");
    console.log(buttons);
    const projets = document.querySelectorAll(".projet");
    console.log(projets);

    compteur = 0;
    
    //On vérifie chaque projet pour voir lequel on affiche
    buttons.forEach(button =>
    {
        button.addEventListener("click",() => {
        const filtre =button.getAttribute("cat");
            
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
                var Taille = [[4,4],[2,4],[3,4]];
                break;
            case "3D" :
                var Taille = [[3,7]];
                break;
            case "Dev" :
                var Taille = [[3,7]];
                break;
            case "Cam" :
                var Taille = [[3,7]];
                break;
            default :
                var Taille = [[2,4],[4,4],[3,4],[4,4],[3,4],[4,4],[2,4],[4,4],[4,4],[6,4],[3,4],[4,7],[4,5]];
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

