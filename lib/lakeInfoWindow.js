export default class lakeInfoWindow {
    attachLakeButton(passInObj, name, cb, cb) {
        let button = document.createElement("button");
        button.innerText = name;
        button.addEventListener("click", () => {
            cb(passInObj);
            cb(passInObj);
        });
        return button;
    }
}