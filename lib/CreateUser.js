import { db } from "../firebase";
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
  
        let pass = document.querySelector("#pass").value;

        let verPass = document.querySelector("#verPass").value;
  
        if (pass != verPass) {
            alert("Passwords do not match.");
        }
  
        // //create user in Firebase
  
        // auth.createUserWithEmailAndPassword(email, pass).then(response => {
  
        //   console.log("user registered");
  
        //   console.log(response);
  
        //   console.log(response.user);

        //   addUserToStateAndDb(userName, email, pass, homeCity, homeState, favoriteLake);  

        // //   render(state.Home);  
        // });  

        function addUserToStateAndDb() {

            // state.User.username = userName;
          
            // state.User.homeCity = homeCity;
          
            // state.User.homeState = homeState;
          
            // state.User.email = email;
          
            // state.User.loggedIn = true;
          
          
          
            db.collection("Users").add({
          
              UserName: userName,
          
              HomeCity: homeCity,
    
              HomeState: homeState,

              FavoriteLake: favoriteLake,
          
              Email: email,
          
              Password: pass,
          
              signedIn: true
          
            });
          
          }
          addUserToStateAndDb();
          render("/Home");
      });


}