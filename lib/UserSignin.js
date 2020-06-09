import { db, auth } from "../firebase";
import * as state from "../store";


export default function UserSignin() {
    auth.createUserWithEmailAndPassword(email, password);
}