const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

const validUser = {
  email: "test@gmail.com",
  password: "12345678",
};

const enterUser = () => {
  btn.addEventListener("click", () => {
    if (email !== validUser.email || password !== validUser.password) {
      console.log("Invalid credentials");
    }

    if (email === "" || password === "") {
      console.log("Please enter you details");
    }

    console.log("Login successful.");
    window.location.href = "dashboard.html";
  });
};

enterUser();
