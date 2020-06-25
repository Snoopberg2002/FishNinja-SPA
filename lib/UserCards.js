import { db } from "../firebase";

export default function UserCards(target) {
    db.collection("Users").get()
    .then(res => {
        res.forEach(doc => {
            let user = doc.data();
            // console.log(user);
            let users = [];

            let div = document.createElement("div");
            div.setAttribute("class", "ninjas");
            div.setAttribute("height", "100px");
            let image;
            if (user.Gender === "male") {
                image = "https://i.imgur.com/0uKU5oV.png";
            } else {
                image = "https://i.imgur.com/HVydTh9.jpg";
            }
            let ninjaCard = `
            <a class="ninjaImage" href=""><img src="${image}" class="ninjaImage" height="40px"/></a>
            <h4 class="ninjaName">${user.UserName}</h4>
            <p class="ninjaCity">${user.HomeCity},</p>
            <p class="ninjaState">${user.HomeState}</p>`
            div.innerHTML = ninjaCard;

            target.appendChild(div);
        });
    })
}