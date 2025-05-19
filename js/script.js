function init () {
    //Menu Hamburger
    icon = document.getElementById("Hamburger");

    //Filtre Projet
    const Buttons = document.querySelectorAll(".filter *");
    const Projects = document.querySelectorAll("a.projet");

    Buttons.forEach(Button =>
    {
        Button.addEventListener("click",()=> {
            const filter = Button.getAttribute("category");
            // console.log(filter);

            compteur = 0
            Select = new Array();

            Projects.forEach(project => {
                project.classList.remove("grand-Projet");
                
                const ProjCat = project.getAttribute("category");
                console.log(ProjCat);
                if ((ProjCat.includes(filter)) ||(filter == "*")) {
                    project.style.display="";
                }
                else {
                    project.style.display = "none";
                }

                if(project.style.display != "none") {
                    compteur++;
                    Select.push(project);
                }
            })
            console.log(compteur); 
            if(compteur % 2 == 1) {
                console.log(Select[Select.length - 1]);
                Select[Select.length - 1].classList.add("grand-Projet");
            }

        });
    });
}

//Fonction pour changer l'affichage du menu Hamburger
function Menu() {
    // console.log("function executed ! ");
    var menu = document.getElementById("nav_Mobile");
    
    // console.log(menu);
    // console.log(icon);

    if (menu.className === "") {
        icon.className="open";
        menu.className = "open";
    }
    else {
        icon.className="close";
        menu.className = "";
    }
}


