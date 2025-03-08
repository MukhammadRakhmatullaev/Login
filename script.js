document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Formani yangilanmasligini oldini oladi

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // Oddiy foydalanuvchi tekshiruvi (real loyihada backend kerak)
    if (username === "admin" && password === "1234") {
        localStorage.setItem("loggedIn", "true"); // Login holatini saqlash
        window.location.href = "dashboard.html"; // Dashboard sahifasiga yo‘naltirish
    } else {
        errorMessage.textContent = "Noto‘g‘ri login yoki parol!";
    }
});
