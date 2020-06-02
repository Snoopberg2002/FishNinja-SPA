import Map from "../../lib/Map";
import NewsFeed from "../../lib/News";

export default (st) => {
    NewsFeed();
    setTimeout(() => {
        const map = new Map();
    }, 500);
}