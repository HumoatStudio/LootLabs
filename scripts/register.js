// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvSqCbcqiKgVps0qgLt8HFj0bArHmCZNs",
  authDomain: "lootlabs-deb89.firebaseapp.com",
  projectId: "lootlabs-deb89",
  storageBucket: "lootlabs-deb89.firebasestorage.app",
  messagingSenderId: "861666560425",
  appId: "1:861666560425:web:f0d97d3b51a52850505cb8",
  measurementId: "G-RMGB748MB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Обработчик формы
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");

  if (!form) {
    console.error("Форма регистрации не найдена!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("e-mail").value;
    const password = document.getElementById("password").value;

    if (password.length < 6) {
      alert("Пароль должен быть не менее 6 символов");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User created:", user);
        alert("Пользователь успешно зарегистрирован!");
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error:", error.code, error.message);
        alert("Ошибка: " + error.message);
      });
  });
});
