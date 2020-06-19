import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";

export default function CreateUser() {

    document.querySelector("#registerForm").addEventListener("submit", event => {

        event.preventDefault(); 

        let users = db.collection("Users");
  
        let homeCity = document.querySelector("#homeCity").value;
  
        let homeState = document.querySelector("#homeState").value;

        let favoriteLake = document.querySelector("#favLake").value;

        let gender = document.querySelector("#gender").value;
  
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

          addUserToStateAndDb(); 

          
        });  

        function addUserToStateAndDb() {
          
          let newUser = {
          
            UserName: userName,
        
            HomeCity: homeCity,
  
            HomeState: homeState,

            FavoriteLake: favoriteLake,

            Gender: gender,
        
            Email: email,
        
          }
          users.add(newUser)
          .then(console.log("Hello"))
        }
    });

}