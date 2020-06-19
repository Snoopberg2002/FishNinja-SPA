import SetBackground from "../../lib/SetBackground";
import SearchLakes from "../../lib/SearchLakes";

export default (st) => {
    SetBackground(document.querySelector(".searchMain"));
    SearchLakes(document.querySelector("#searchForm"));
}