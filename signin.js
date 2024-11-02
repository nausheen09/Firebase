import { signInWithEmailAndPassword, updatePassword ,getAuth} from "./firebase.js";
const auth = getAuth();


let signInPassword = document.getElementById("signInPassword")
let  signInEmail = document.getElementById("signInEmail")
let loginBtn = document.getElementById("loginBtn")
const forgotPassword = document.getElementById("forgotPassword");


// Login Button Event Listener
loginBtn.addEventListener("click", () => {
    if (signInEmail.value.trim() && signInPassword.value.trim()) {
        signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are successfully logged in!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(user);
                location.href = "dashboard.html";
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire("Login failed!", errorMessage, "error");
            });
    } else {
        Swal.fire("Please enter your data!");
    }
    location.href = "dashboard.html";
});

// Forgot Password Event Listener
forgotPassword.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior

    Swal.fire({
        title: 'Reset Password',
        html: `
            <input type="password" id="newPassword" class="swal2-input" placeholder="Enter new password">
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Update Password',
        preConfirm: () => {
            const newPassword = document.getElementById('newPassword').value;
            if (!newPassword) {
                Swal.showValidationMessage(`Please enter a new password`);
                return;
            }
            return newPassword;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const newPassword = result.value;

            const user = auth.currentUser; // Get current user
            updatePassword(user, newPassword).then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Password updated successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log("Password updated successfully.");
            }).catch((error) => {
                console.error("Error updating password: ", error);
                Swal.fire({
                    icon: "error",
                    title: "Error updating password",
                    text: error.message
                });
            });
        }
    });
});

