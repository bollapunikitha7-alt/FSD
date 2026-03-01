

function validation() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;
  let phone = document.getElementById("phone").value;
  let errormsg = document.getElementById("error-msg");
  if (name === "" || email === "" || password === "" || confirmPassword === "" || phone === "") {
    errormsg.textContent = "All fields are required";
    return false;
  }
  if (password !== confirmPassword) {
    errorMsg.textContent = "Passwords do not match";
    return false;
  }
  alert("Signup Successful!");
  return true;
}

var storedEmail = localStorage.getItem("email");
var storedPassword = localStorage.getItem("password");
 if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; 
    } else {
        alert("Invalid Email or Password");
    }