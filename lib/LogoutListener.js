import { default as toggleModal } from "./ToggleModal";
import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function LogoutListener(user) {

    // select link in header
  
    document.querySelector("#logout").addEventListener("click", event => {
        event.preventDefault();
        console.log(user);
  
      // if user is logged in,
  
      if (user.signedIn) {
  
        event.preventDefault();
  
        // log out functionality
  
        auth.signOut().then(() => {
  
          console.log("user logged out");
  
          logOutUserInDb(user.email);
  
          resetUserInState();
  
          //update user in database
  
          db.collection("Users").get;
  
          render(state.Home);
  
        });
  
        console.log(user);
  
      }
  
      // if user is logged out, clicking the link will render sign in page (handled by <a>'s href)
  
    });
  
  }

  function logOutUserInDb(email) {

    if (state.User.signedIn) {
  
      db.collection("Users")
  
        .get()
  
        .then(snapshot =>
  
          snapshot.docs.forEach(doc => {
  
            if (email === doc.data().email) {
  
              let id = doc.id;
  
              db.collection("Users")
  
                .doc(id)
  
                .update({ signedIn: false });
  
            }
  
          })
  
        );
  
      console.log("user signed out in db");
  
    }
  
  }
  
  function resetUserInState() {
  
    state.User.userName = "";
  
    state.User.email = "";
  
    state.User.signedIn = false;
  
  }
  
  


