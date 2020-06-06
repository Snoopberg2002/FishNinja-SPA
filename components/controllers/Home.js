import NewsFeed from "../../lib/News";
import HomeListeners from "../../lib/HomeListeners";
import InfoWindow from "../../lib/InfoWindow";
import CreateMap from "../../lib/CreateMap";
import CreatePosts from "../../lib/CreatePosts";

export default (st) => {
    // NewsFeed();
    HomeListeners();
    setTimeout(() => {
        CreateMap();
    }, 500);
}