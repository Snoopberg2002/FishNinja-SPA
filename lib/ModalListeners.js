import { default as toggleModal } from "./ToggleModal";
import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function modalListeners() {
  // Modals' Elements
  let activeModal = document.querySelector(".activeModal");
  let aboutBtn = document.querySelector(".about");
  let aboutModal = document.querySelector(".aboutTemplate").innerHTML;
  let contactsBtn = document.querySelector(".contact");
  let contactsModal = document.querySelector(".contactsTemplate").innerHTML;
  let loginBtn = document.querySelector(".login");
  let loginModal = document.querySelector(".loginTemplate").innerHTML;
  let newsBtn = document.querySelector(".newsStory");
  let newsModal = document.querySelector(".newsTemplate").innerHTML;
  let map = document.querySelector("#map");
  let modal = document.querySelector(".modalBg");
  let modalContent = document.querySelector(".modalContent");

  //About Modal Content
  aboutBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(aboutModal);
  });

  //Contacts Modal Content
  contactsBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(contactsModal);
  });

  //Login Modal Content
  loginBtn.addEventListener("click", (event) => {
    event.preventDefault();
    toggleModal(loginModal);

    document.querySelector("#login").addEventListener("submit", (event) => {
      event.preventDefault();

      let inputs = [...event.target.elements];
      let email, password;

      inputs.forEach((el) => {
        switch (el.name) {
          case "email":
            email = el.value;
            break;
          case "password":
            password = el.value;
            break;
        }
      });

      auth.signInWithEmailAndPassword(email, password).then((result) => {
        console.log(result);

        console.log("user signed in");

        getUserFromDb();
        // let user = {
        //   signedIn: true,
        //   email: result.user.email
        // };
        // console.log(user);
        // localStorage.setItem("user", JSON.stringify(user));
        // window.location.reload();
      });

      function getUserFromDb(email) {
        db.collection("Users")

          .get()

          .then((snapshot) =>
            snapshot.docs.forEach((doc) => {
              if (email === doc.data().email) {
                let id = doc.id;

                db.collection("Users")

                  .doc(id)

                let User = doc.data();

                let user = {
                  signedIn: true,
                  email: User.Email,
                  userName: User.UserName,
                  homeCity: User.HomeCity,
                  homeState: User.HomeState,
                  favoriteLake: User.FavoriteLake
                };
                console.log(user);
                localStorage.setItem("user", JSON.stringify(user));
                window.location.reload();


              }
            })
          );
      }
    });
  });
}
