import CreateUser from "../../lib/CreateUser";
import SetBackground from "../../lib/SetBackground";

export default (st) => {
    SetBackground(document.querySelector(".registerMain"));
    CreateUser();
}