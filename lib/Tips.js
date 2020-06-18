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
        // console.log(tipsImages);
        let choice1 = techniques[species.value];
        par.textContent = choice1[seasons.value];
        par.style.color = "white";
        par.style.backgroundColor = "black";
        par.style.opacity = "0.6";
        // console.log(species.value);
        
        if(species.value === "bluegill") {
            background.style.backgroundImage = `url("${bluegill}")`;
        }

        if(species.value === "crappie") {
            background.style.backgroundImage = `url("https://i.imgur.com/NFGq8Tf.jpg")`;
        }

        if(species.value === "perch") {
            background.style.backgroundImage = `url("https://i.imgur.com/LQE794m.jpg")`;
            // par.style.color = "lightSkyBlue";
        }

        if(species.value === "smb") {
            background.style.backgroundImage = `url("https://i.imgur.com/AB1cHrC.jpg")`;
        }

        if(species.value === "lmb") {
            background.style.backgroundImage = `url("https://i.imgur.com/WTakntr.jpg")`;
            // par.style.color = "#000";
        }

        if(species.value === "walleye") {
            background.style.backgroundImage = `url("https://i.imgur.com/1ItADAN.jpg")`;
        }

        if(species.value === "pike") {
            background.style.backgroundImage = `url("https://i.imgur.com/AGKxIXi.jpg")`;
        }

        if(species.value === "muskie") {
            background.style.backgroundImage = `url("https://i.imgur.com/sJNIswJ.jpg?1")`;
        }
            // tipsImages.forEach(el => {
            //     console.log(el);
            //     if (species.value === el) {
            //         background.style.backgroundImage = `url("${el}")`;
            //     }
            // });
    });
    
}