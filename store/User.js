const user = localStorage.getItem("user");
let userObject = {
    signedIn: false
}
if (user) {
    userObject = JSON.parse(user);
}
export default userObject;
