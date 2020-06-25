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
      // console.log(result);

      console.log("user signed in");

      getUserFromDb(result.user.uid);
    });

    function getUserFromDb(id) {
        users.where("Id", "==", id)
        .get()

        .then(snapshot => {
          snapshot.forEach(doc => {
            // console.log(doc.data());

            let User = doc.data(); 

            let user = {
              signedIn: true,
              UserName: User.UserName,
              HomeCity: User.HomeCity,
              HomeState: User.HomeState,
              FavoriteLake: User.FavoriteLake,
              Gender: User.Gender,
              Id: id
            };
            // console.log(user);
            localStorage.setItem("user", JSON.stringify(user));
            // window.location.reload();
          });
        
        });
    }
}