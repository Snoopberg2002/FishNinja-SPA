import { db } from "../firebase";

export default function UserCards(target) {
    db.collection("Users").get()
    .then(res => {
        res.forEach(doc => {
            let user = doc.data();
            console.log(user.Gender);
            let div = document.createElement("div");
            div.setAttribute("class", "ninjas");
            div.setAttribute("height", "125px");
            let ninjaCard = `
            <image id="ninjaImage" height="50px"><a id="ninjaImage" href="#"></a></image>
            <h4 id="ninjaName">${user.UserName}</h4>
            <p id="ninjaCity">${user.HomeCity},</p>
            <p id="ninjaState">${user.HomeState}</p>`
            div.innerHTML = ninjaCard;

            target.appendChild(div);
            
            if (user.Gender === "male") {
                document.querySelector("#ninjaImage").setAttribute("src", "https://i.imgur.com/0uKU5oV.png");
            } else {
                document.querySelector("#ninjaImage").setAttribute("src", "https://i.imgur.com/NFBQHoj.png?1");
            }
        });
    })
}