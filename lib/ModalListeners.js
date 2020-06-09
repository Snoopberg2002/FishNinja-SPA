import { default as toggleModal } from "./ToggleModal";
import { auth, db } from "../firebase";
import { render } from "./Render";

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
    
    document.querySelector("#login").addEventListener("submit", event => {

        event.preventDefault();
  
        let email = document.querySelector("#email");
  
        let password = document.querySelector("#pass");
  
        auth.signInWithEmailAndPassword(email, password).then(() => {
  
          console.log("user signed in");
  
          getUserFromDb(email).then(() => render(state.Home));
  
        });

        function getUserFromDb(email) {

            return db
          
              .collection("Users")
          
              .get()
          
              .then(snapshot =>
          
                snapshot.docs.forEach(doc => {
          
                  if (email === doc.data().email) {
          
                    let id = doc.id;
          
                    db.collection("Users")
          
                      .doc(id)
          
                      .update({ signedIn: true });
          
                    console.log("user signed in in db");
          
                    let user = doc.data();
          
                    state.User.userName = user.userName;
          
                    state.User.email = email;
          
                    state.User.signedIn = true;
          
                    console.log(state.User);
          
                  }
          
                })
          
              );
          
        }
  
      });
  });

}
