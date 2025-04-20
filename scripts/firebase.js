import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

// Конфиг Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCvSqCbcqiKgVps0qgLt8HFj0bArHmCZNs",
    authDomain: "lootlabs-deb89.firebaseapp.com",
    projectId: "lootlabs-deb89",
    storageBucket: "lootlabs-deb89.firebasestorage.app",
    messagingSenderId: "861666560425",
    appId: "1:861666560425:web:e6f614e2bb4839fa505cb8",
    measurementId: "G-NDY3GLKK3L"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Инициализация Auth и Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Проверка авторизации
onAuthStateChanged(auth, async (user) => {
    const path = window.location.pathname;
  
    if (user) {
      try {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);
        const balance = userDocSnap.data()?.balance || 0;
  
        const moneyElement = document.querySelector('.dark-money-amount');
        if (moneyElement) {
          moneyElement.textContent = balance;
        }
      } catch (error) {
        console.error("Ошибка при получении данных пользователя:", error);
      }
    } else {
      // Только если не на login.html или register.html
      if (!path.includes("login.html") && !path.includes("register.html")) {
        window.location.href = "login.html";
      }
    }
  });
  
