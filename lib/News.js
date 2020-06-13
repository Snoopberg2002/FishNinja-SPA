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
  const newsContainer = document.querySelector("#news");
  res.data.value.forEach(element => {
    let elem = document.createElement("li");
    let a = document.createElement("a");
    a.setAttribute("href", "#");
    a.innerHTML = element.title;
    elem.appendChild(a);
    newsContainer.appendChild(elem);
    a.addEventListener("click", e => {
      e.preventDefault();
      toggleModal(newsTemplate(element));
    })
  });
})

}

const newsTemplate = (data) => {
  return `<div id="newsModal"><div id="newsContent"><img id ="newsImage" src="${data.image.url}"></img><h1>${data.title}</h1>
  <p>${data.body}</p></div></div>`
}