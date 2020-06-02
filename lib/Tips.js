import techniques from "./TipsObject.js";

export default function getTips() {
    let species = document.getElementById("species");
    let seasons = document.getElementById("season");
    let par = document.querySelector("#techniques");
    let background = document.querySelector(".tipsMain");
    let bluegill = "https://i.imgur.com/4i6DkKG.jpg";

    let tipsImages = [bluegill]
    document.querySelector("#tipsForm").addEventListener("submit", event => {
        event.preventDefault();
        let choice1 = techniques[species.value];
        par.textContent = choice1[seasons.value];
        

            // tipsImages.forEach(el => {
            //     if (species.value === el) {
            //         background.style.background-image = `url("${el}")`;
            //     }
            // })
    });
    
}