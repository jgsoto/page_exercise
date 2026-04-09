const login_btn = document.getElementById("loginButton");
login_btn.addEventListener("click", async () => {
    const user = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (user === "admin" && password === "12345") {
        window.location.href = "search.html";
    } else {
        alert("Please fill in all the fields");
    }
});