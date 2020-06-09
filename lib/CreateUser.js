import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function CreateUser() {

    document.querySelector("#registerForm").addEventListener("submit", event => {

        event.preventDefault();
  
        let homeCity = document.querySelector("#homeCity").value;
  
        let homeState = document.querySelector("#homeState").value;

        let favoriteLake = document.querySelector("#favLake").value;
  
        let email = document.querySelector("#email").value;

        let userName = document.querySelector("#userName").value;
  
        let password = document.querySelector("#pass").value;

        let verPass = document.querySelector("#verPass").value;
  
        if (password != verPass) {
            alert("Passwords do not match.");
        }
  
        //create user in Firebase
  
        auth.createUserWithEmailAndPassword(email, password).then(response => {
  
          console.log("user registered");
  
          console.log(response);
  
          console.log(response.user);

          addUserToStateAndDb(userName, email, homeCity, homeState, favoriteLake);  

          render(state.Home);  
        });  

        function addUserToStateAndDb() {

            state.User.userName = userName;
          
            state.User.email = email;
          
            state.User.loggedIn = true;
          
          
          
            db.collection("Users").add({
          
              UserName: userName,
          
              HomeCity: homeCity,
    
              HomeState: homeState,

              FavoriteLake: favoriteLake,
          
              Email: email,
          
              signedIn: true
          
            });
          
        }
    });

}