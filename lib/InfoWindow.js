export default class InfoWindow {
    attachButton(passInObj, name, cb) {
        let button = document.createElement("button");
        button.innerText = name;
        button.addEventListener("click", () => {
            cb(passInObj)
        });
        return button;
    }
}


