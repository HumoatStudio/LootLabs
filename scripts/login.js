// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCvSqCbcqiKgVps0qgLt8HFj0bArHmCZNs",
  authDomain: "lootlabs-deb89.firebaseapp.com",
  projectId: "lootlabs-deb89",
  storageBucket: "lootlabs-deb89.firebasestorage.app",
  messagingSenderId: "861666560425",
  appId: "1:861666560425:web:f0d97d3b51a52850505cb8",
  measurementId: "G-RMGB748MB0"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Авторизация
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("Успешный вход:", user);
      alert("Вы успешно вошли!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.log("Ошибка входа:", error.code, error.message);
      alert("Ошибка: " + error.message);
    });
});
