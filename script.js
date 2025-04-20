// Подключение Firebase и аутентификации
import { onAuthStateChangedListener, readUserData } from 'scripts/firebase.js';

// Функция для открытия модала
function openModal(title, description) {
  document.getElementById('modalTitle').innerText = title;
  document.getElementById('modalDescription').innerText = description;
  document.getElementById('myModal').style.display = 'block';
}

// Функция для закрытия модала
function closeModal() {
  document.getElementById('myModal').style.display = 'none';
}

// Функция для переключения панели
function togglePanel() {
  const panel = document.getElementById("logoPanel");
  panel.style.display = (panel.style.display === "block") ? "none" : "block";
}

// Скрытие панели при клике вне
document.addEventListener("click", function (event) {
  const panel = document.getElementById("logoPanel");
  const logo = document.querySelector(".logo-container");
  
  if (!panel || !logo) return;

  // Если клик был не по панели и не по логотипу
  if (!panel.contains(event.target) && !logo.contains(event.target)) {
      panel.style.display = "none";
  }
});

// Проверка авторизации и обновление UI с балансом
window.addEventListener('DOMContentLoaded', async () => {
  console.log('LootLabs загружен!');
  
  const user = localStorage.getItem('user');
  const greeting = document.getElementById('user-greeting');
  const logoutBtn = document.getElementById('logout-btn');
  const loginLink = document.getElementById('login-link');
  const registerLink = document.getElementById('register-link');

  if (user) {
    loginLink.style.display = 'none';
    registerLink.style.display = 'none';
  }

  // Firebase слушатель для авторизации
  onAuthStateChangedListener(async (user) => {
    if (user) {
      // Пользователь авторизован
      const userData = await readUserData(user.uid);
      if (userData) {
        document.querySelector('.dark-money-amount').textContent = userData.balance;
      }
    } else {
      // Если пользователь не авторизован, редирект на страницу логина
      window.location.href = "login.html";
    }
  });
});

// Функция для добавления денег
async function addMoney(amount) {
  const user = auth.currentUser;
  if (!user) return;

  const userRef = db.collection("users").doc(user.uid);
  const doc = await userRef.get();
  const currentBalance = doc.data().balance || 0;
  const newBalance = currentBalance + amount;

  await userRef.update({ balance: newBalance });
  document.querySelector('.dark-money-amount').textContent = newBalance;
}
