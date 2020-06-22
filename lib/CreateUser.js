import { auth, db } from "../firebase";
import { render } from "./Render";
import * as state from "../store";
import UserSignin from "./UserSignin";
import toggleModal from "./ToggleModal";
const users = db.collection("Users");

export default function CreateUser() {

    document.querySelector("#registerForm").addEventListener("submit", event => {

        event.preventDefault(); 
  
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
          AddUser(response.user.uid); 
          
        });  

        function AddUser(id) {

          console.log(id);
          
          let newUser = {
          
            UserName: userName,
        
            HomeCity: homeCity,
  
            HomeState: homeState,

            FavoriteLake: favoriteLake,

            Gender: gender,
        
            Email: email,

            Id: id
        
          }
          
          users.add(newUser)
          .then(res => {
            console.log(res);
            toggleModal(document.querySelector(".loginTemplate").innerHTML);
            alert("Please re-enter email and password to Log In.");
          })
          .catch(e => {
            console.log(e);
          })
        }
    });

}