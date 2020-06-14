import { default as toggleModal } from "./ToggleModal";
import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function LogoutListener(user) {

  let logoutBtn = document.querySelector("#logout");
  
  if (logoutBtn) {
    logoutBtn.addEventListener("click", event => {
      event.preventDefault();

      auth.signOut();
      localStorage.clear();
      window.location.reload();
      console.log(user);



    });
  }
  
}


  
  


