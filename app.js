// importing
import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();


let signupBtn = document.getElementById("signupBtn");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");

// Regular expression to validate email format
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

signupBtn.addEventListener("click", () => {
    // Check if fields are not empty and if email follows the valid format
    if (signupEmail.value.trim() && signupPassword.value.trim()) {
        if (!emailPattern.test(signupEmail.value)) {
            console.log("Please enter a valid email address");
            return;
        }
        
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Account successfully created!",
                    showConfirmButton: false,
                    timer: 1500
                  });
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage);
                switch (errorMessage) {
                    case "Firebase: Error (auth/email-already-in-use).":
                        Swal.fire({
                            title: "The Internet?",
                            text: "Please use a different email",
                            icon: "question"
                          });
                        // console.log("Please use a different email.");
                        break;
                }
            });
    } 
    else {
        Swal.fire("Please enter your data.!");
        // console.log("");
    }

    location.href = "signin.html";
});






