//Filtre page Projets
const Buttons = document.querySelectorAll(".filter *");
const Projects = document.querySelectorAll("a.projet");

Buttons.forEach(Button =>
{
    Button.addEventListener("click",()=> {
        const filter = Button.getAttribute("category");
        // console.log(filter);
        Projects.forEach(project => {
            const ProjCat = project.getAttribute("category");
            console.log(ProjCat);
            if ((ProjCat.includes(filter)) ||(filter == "*")) {
                project.style.display="";
            }
            else {
                project.style.display = "none";
            }
        })
        });
});