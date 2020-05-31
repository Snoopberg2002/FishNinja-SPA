import { default as toggleModal } from "./ToggleModal";

export default function NewsFeed() {
  let url =
    "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/everything?q=fishing&apiKey=b31fe28ec61944e786a43026ba67928c";

  let req = new Request(url);
  let stories = [];
  fetch(req, {
    headers: {
      "Access-Control-Allow-Origin": window.location.origin,
    },
  })
    .then((response) => response.json())
    .then((res) => {
      const target = document.querySelector("#news");
      res.articles.forEach((story) => {
        const elem = document.createElement("li");
        elem.innerHTML = `<a class="newsStory" href="#">${story.title}</a>`;
        stories.push(story);
        elem.addEventListener("click", (e) => {
          e.preventDefault();
          console.log(story.author);
          toggleModal(document.querySelector(".newsTemplate").innerHTML);
          document.querySelector("#title").textContent = story.title;
          document.querySelector("#").textContent = `by ${story.author}`;
          document.querySelector("#story").textContent = story.content;
          
        });
        target.appendChild(elem);
      });
    })
    .catch((e) => {
      console.log("Unable to Fetch News");
    });
    console.log(stories);
}

// console.log(stories);
// export default { stories }

//     {source: {…}, author: "Louryn Strampe", title: "22 Surprising Tips to Master 'Animal Crossing: New Horizons'", description: "From growing hybrid flowers to catching pesky wasps, these tricks will turn you into a pro.", url: "https://www.wired.com/story/animal-crossing-new-horizons-tips/", …}
// author: "Louryn Strampe"
// content: "I've been an Animal Crossing fan for 19 years, so you can say things are pretty serious. New Horizons for the Nintendo Switch is, in my opinion, the best version of the game yet.
// ↵With my extensive (… [+2706 chars]"
// description: "From growing hybrid flowers to catching pesky wasps, these tricks will turn you into a pro."
// publishedAt: "2020-05-03T13:00:00Z"
// source: {id: "wired", name: "Wired"}
// title: "22 Surprising Tips to Master 'Animal Crossing: New Horizons'"
// url: "https://www.wired.com/story/animal-crossing-new-horizons-tips/"
// urlToImage: "https:/
