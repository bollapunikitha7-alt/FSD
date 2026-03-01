function login() {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value === "" || password.value === "") {
        alert("Please enter username and password");
    } else {
        alert("Login successful!");
        username.value = "";
        password.value = "";
    }
}
