import NewsFeed from "../../lib/News";
import HomeListeners from "../../lib/HomeListeners";
import InfoWindow from "../../lib/InfoWindow";
import CreateMap from "../../lib/CreateMap";
import AddPosts from "../../lib/AddPosts";

export default (st) => {
    // NewsFeed();
    AddPosts();
    HomeListeners();
    setTimeout(() => {
        CreateMap();
    }, 500);
}