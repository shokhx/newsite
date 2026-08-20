// --- ПЕРЕКЛЮЧЕНИЕ ЯЗЫКОВ НА САЙТЕ ---
const langData = {
    ru: { "w-phone": "Позвонить" },
    en: { "w-phone": "Call" },
    uz: { "w-phone": "Qo'ng'iroq" }
};

function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (langData[lang] && langData[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = langData[lang][key];
            } else {
                el.textContent = langData[lang][key];
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'ru';
    changeLanguage(savedLang);
});

// --- ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ И ЗАКРЫТИЯ ВИДЖЕТА ---
function toggleWidgetMenu() {
    const menu = document.getElementById('widget-menu');
    const btn = document.querySelector('.widget-trigger-btn');
    if (menu && btn) {
        menu.classList.toggle('show');
        btn.classList.toggle('active');
    }
}

// --- ФОРМА 1: ОТПРАВКА EMAIL В БАЗУ ДАННЫХ MONGODB ---
const subForm = document.getElementById('footer-sub-form');
if (subForm) {
    subForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const emailInput = document.getElementById('sub-input');
        const emailValue = emailInput.value;
        try {
            const response = await fetch('https://onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: emailValue })
            });
            const data = await response.json();
            if (response.ok) {
                alert('Успешно! Ваш Email сохранен в базу данных MongoDB.');
                emailInput.value = '';
            } else {
                alert('Ошибка сервера: ' + data.error);
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Не удалось связаться с сервером бэкенда.');
        }
    });
}

// --- ФОРМА 2: ОТПРАВКА ИМЕНИ И ТЕЛЕФОНА ИЗ ОКОШКА В БАЗУ ---
const callbackForm = document.getElementById('widget-callback-form');
if (callbackForm) {
    callbackForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        const nameInput = document.getElementById('callback-name');
        const phoneInput = document.getElementById('callback-phone');
        try {
            const response = await fetch('https://onrender.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: nameInput.value, phone: phoneInput.value })
            });
            const data = await response.json();
            if (response.ok) {
                alert('Данные успешно отправлены и сохранены в MongoDB!');
                nameInput.value = '';
                phoneInput.value = '';
                toggleWidgetMenu();
            } else {
                alert('Ошибка сервера: ' + data.error);
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Не удалось связаться с сервером бэкенда.');
        }
    });
}
