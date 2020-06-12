import { default as toggleModal } from "./ToggleModal";
import axios from "axios";

export default function NewsFeed() {

axios.get("https://custom-search.p.rapidapi.com/api/search/CustomNewsSearchAPIV2?q=fishing&pageNumber=1&searchEngineId=454883044388402107", { headers: {
  "x-rapidapi-host": "custom-search.p.rapidapi.com",
	"x-rapidapi-key": "c8ab7a9923mshc6be630644f54c1p1ccdb5jsnf4a4d7e32818",
  "useQueryString": true
  }
})
.then(res => {
  console.log(res.data.value);
})

}