import { db, auth } from "../firebase";
import * as state from "../store";

const users = db.collection("Users");


export default function UserSignin() {
    
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

      getUserFromDb(result.user.email);
    });

    function getUserFromDb(email) {
        users.where("Email", "==", email)
        .get()

        .then(snapshot => {
          snapshot.forEach(doc => {
            console.log(doc.data());
            let id = doc.id; 

            let User = doc.data(); 

            let user = {
              signedIn: true,
              userName: User.UserName,
              homeCity: User.HomeCity,
              homeState: User.HomeState,
              favoriteLake: User.FavoriteLake,
              gender: User.Gender,
              userId: id
            };
            console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            // window.location.reload();
          });
        
        });
    }
}