import NewsFeed from "../../lib/News";
import HomeListeners from "../../lib/HomeListeners";
import CreateMap from "../../lib/CreateMap";
import AddPosts from "../../lib/AddPosts";
import SetBackground from "../../lib/SetBackground";
import { auth, db } from "../../firebase";
import * as state from "../../store";



export default (st) => {
    SetBackground(document.querySelector(".homeMain"));
    // NewsFeed();
    AddPosts();
    HomeListeners();
    setTimeout(() => {
        CreateMap();
    }, 500);
}