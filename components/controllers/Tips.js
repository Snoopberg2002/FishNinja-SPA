import { default as Tips } from "../../lib/Tips";
import SetSeasons from "../../lib/SetSeasons";


export default (st) => {
    Tips();
    SetSeasons(document.querySelector("#species"), document.querySelector("#season"));
}