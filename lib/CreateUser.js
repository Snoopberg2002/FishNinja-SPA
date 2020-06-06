import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function CreateUser() {

    document.querySelector("#registerForm").addEventListener("submit", event => {

        event.preventDefault();
  
        // convert HTML elements to Array
  
        let inputList = Array.from(event.target.elements);
  
        // remove submit button from list
  
        inputList.pop();
  
        const inputs = inputList.map(input => input.value);
        console.log(inputs);
  
        let homeCity = inputs[0];
  
        let homeState = inputs[1];

        let favoriteLake = inputs[2];
  
        let email = inputs[3];

        let userName = inputs[4]
  
        let pass = inputs[5];

        let verPass = inputs[6];
  
        if (pass != verPass) {
            alert("Passwords do not match.");
        }
  
        //create user in Firebase
  
        auth.createUserWithEmailAndPassword(email, pass).then(response => {
  
          console.log("user registered");
  
          console.log(response);
  
          console.log(response.user);

          addUserToStateAndDb(userName, email, pass, homeCity, homeState, favoriteLake);  

          render(state.Home);  
        });  

        function addUserToStateAndDb(userName, homeCity, homeState, email, pass) {

            // state.User.username = userName;
          
            // state.User.homeCity = homeCity;
          
            // state.User.homeState = homeState;
          
            // state.User.email = email;
          
            // state.User.loggedIn = true;
          
          
          
            db.collection("Users").add({
          
              userName: userName,
          
              homeCity: homeCity,
    
              homeState: homeState,

              favoriteLake: favoriteLake,
          
              email: email,
          
              pass: pass,
          
              signedIn: true
          
            });
          
          }

      });


}