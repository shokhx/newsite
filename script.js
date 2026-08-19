// --- СЛОВАРЬ ДЛЯ ПОЛНОГО ПЕРЕВОДА САЙТА ---
const translations = {
    ru: {
        "nav-about": "Обо мне", "nav-bio": "Биография", "nav-gallery": "Галерея", "btn-contact": "Связаться",
        "hero-title": "История жизни и достижений", "hero-desc": "Путь от вдохновения к великим открытиям и проектам, изменившим окружение.",
        "hero-btn": "Узнать больше", "tab-btn-story": "История", "tab-btn-timeline": "Хронология", "tab-btn-awards": "Награды",
        "card1-title": "Ранние годы", "card1-desc": "Родился в семье инженеров, где с детства прививали любовь к науке, технологиям и постоянному поиску ответов.",
        "card2-title": "Становление", "card2-desc": "Окончил университет с отличием, после чего запустил свой первый успешный проект, который определил вектор.",
        "th-year": "Год", "th-event": "Событие", "th-result": "Результат", "t1-ev": "Основание первой исследовательской лаборатории",
        "t1-res": "Разработано 3 патента", "t2-ev": "Выход на международную арену", "t2-res": "Партнерство с 10+ странами",
        "t3-ev": "Запуск globalного фонда поддержки", "t3-res": "Помощь более 1000 молодых ученых", "aw1-title": "Ученый года (2021)",
        "aw1-desc": "За выдающийся вклад в развитие современных технологий и экосистем.", "aw2-title": "Орден за заслуги (2023)",
        "aw2-desc": "Государственная награда за реализацию социально-значимых проектов.", "gallery-title": "Галерея моментов",
        "gs1-title": "Выступление на Tech Summit", "gs1-desc": "Презентация новой технологической экосистемы перед международными инвесторами.",
        "gs2-title": "Мозговой штурм в лаборатории", "gs2-desc": "Процесс разработки инновационных решений вместе с ключевой командой инженеров.",
        "gs3-title": "Поиск вдохновения", "gs3-desc": "Экспедиция и исследование природных ландшафтов для поиска новых идей.",
        "footer-desc": "История одного пути, посвященного инновациям, постоянному развитию и созданию полезных решений для будущего.",
        "footer-call": "Позвонить", "footer-nav-title": "Навигация", "footer-sub-title": "Следить за проектами",
        "footer-sub-desc": "Оставьте почту, чтобы получать уведомления о новых публикациях и исследованиях.", "footer-rights": "Все права защищены.",
        "footer-dev": "Дизайн и разработка в VS Code", "w-phone": "Позвонить"
    },
    uz: {
        "nav-about": "Men haqimda", "nav-bio": "Biografiya", "nav-gallery": "Galereya", "btn-contact": "Bog'lanish",
        "hero-title": "Hayot va yutuqlar tarixi", "hero-desc": "Ilhomlanishdan boshlab atrof-muhitni o'zgartirgan buyuk kashfiyotlar va loyihalargacha bo'lgan yo'l.",
        "hero-btn": "Batafsil bilish", "tab-btn-story": "Tarix", "tab-btn-timeline": "Xronologiya", "tab-btn-awards": "Mukofotlar",
        "card1-title": "Dastlabki yillar", "card1-desc": "Muhandislar oilasida tug'ilgan, bolaligidan ilm-fanga, texnologiyaga va doimiy izlanishga mehr qo'ygan.",
        "card2-title": "Shakllanish", "card2-desc": "Universitetni imtiyozli diplom bilan tugatib, kelajak yo'nalishini belgilab bergan ilk muvaffaqiyatli loyihasini boshlagan.",
        "th-year": "Yil", "th-event": "Voqea", "th-result": "Natija", "t1-ev": "Birinchi tadqiqot laboratoriyasiga asos solish",
        "t1-res": "3 ta patent ishlab chiqildi", "t2-ev": "Xalqaro maydonga chiqish", "t2-res": "10 dan ortiq davlatlar bilan hamkorlik",
        "t3-ev": "Global qo'llab-quvvatlash fondini ishga tushirish", "t3-res": "1000 dan ortiq yosh olimlarga yordam", "aw1-title": "Yil olimi (2021)",
        "aw1-desc": "Zamonaviy texnologiyalar va ekotizimlarni rivojlantirishga qo'shgan ulkan hissasi uchun.", "aw2-title": "Jasorat ordeni (2023)",
        "aw2-desc": "Ijtimoiy ahamiyatga ega loyihalarni amalga oshirganlik uchun davlat mukofoti.", "gallery-title": "Lahzalar galereyasi",
        "gs1-title": "Tech Summit sammitidagi nutq", "gs1-desc": "Xalqaro investorlar oldida yangi texnologik ekotizim taqdimoti.",
        "gs2-title": "Laboratoriyada fikrlar almashinuvi", "gs2-desc": "Muhandislar jamoasi bilan birgalikda innovatsion yechimlarni ishlab chiqish jarayoni.",
        "gs3-title": "Ilhom izlab", "gs3-desc": "Yangi g'oyalarni topish uchun tabiat manzaralariga uyushtirilgan ekspeditsiya.",
        "footer-desc": "Kelajak uchun foydali yechimlar yaratish, innovatsiyalar va doimiy rivojlanishga bag'ishlangan yo'l tarixi.",
        "footer-call": "Qo'ng'iroq", "footer-nav-title": "Navigatsiya", "footer-sub-title": "Loyihalarni kuzatish",
        "footer-sub-desc": "Yangi nashrlar va tadqiqotlar haqica bildirishnomalar olish uchun pochtangizni qoldiring.", "footer-rights": "Barcha huquqlar himoyalangan.",
        "footer-dev": "VS Code dasturida yaratildi", "w-phone": "Qo'ng'iroq"
    },
    en: {
        "nav-about": "About Me", "nav-bio": "Biography", "nav-gallery": "Gallery", "btn-contact": "Contact",
        "hero-title": "History of Life and Achievements", "hero-desc": "A journey from inspiration to great discoveries and projects that changed the world.",
        "hero-btn": "Learn More", "tab-btn-story": "Story", "tab-btn-timeline": "Timeline", "tab-btn-awards": "Awards",
        "card1-title": "Early Years", "card1-desc": "Born into a family of engineers, where a love for science, technology, and constant searching was nurtured since childhood.",
        "card2-title": "Becoming", "card2-desc": "Graduated from university with honors, then launched his first successful project, which determined his career vector.",
        "th-year": "Year", "th-event": "Event", "th-result": "Result", "t1-ev": "Founding of the first research laboratory",
        "t1-res": "3 patents developed", "t2-ev": "Entering the international arena", "t2-res": "Partnership with 10+ countries",
        "t3-ev": "Launch of a global support fund", "t3-res": "Assistance to more than 1000 young scientists", "aw1-title": "Scientist of the Year (2021)",
        "aw1-desc": "For outstanding contribution to the development of modern technologies and ecosystems.", "aw2-title": "Order of Merit (2023)",
        "aw2-desc": "State award for the implementation of socially significant projects.", "gallery-title": "Gallery of Moments",
        "gs1-title": "Speech at Tech Summit", "gs1-desc": "Presentation of the new technological ecosystem to international investors.",
        "gs2-title": "Brainstorming in the Lab", "gs2-desc": "The process of developing innovative solutions together with the key team of engineers.",
        "gs3-title": "Search for Inspiration", "gs3-desc": "Expedition and study of natural landscapes to find new ideas.",
        "footer-desc": "The story of a journey dedicated to innovation, continuous development, and creating useful solutions for the future.",
        "footer-call": "Call", "footer-nav-title": "Navigation", "footer-sub-title": "Follow Projects",
        "footer-sub-desc": "Leave your email to receive notifications about new publications and research.", "footer-rights": "All rights reserved.",
        "footer-dev": "Designed and developed in VS Code", "w-phone": "Call Now"
    }
};

// --- СМЕНА ЯЗЫКА ---
function toggleLangMenu() {
    document.getElementById('lang-dropdown').classList.toggle('show');
    document.querySelector('.lang-current-btn').classList.toggle('active');
}

function changeLanguage(lang) {
    document.getElementById('current-lang-txt').innerText = lang.toUpperCase();
    const elements = document.querySelectorAll('[data-lang-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
    const subInput = document.getElementById('sub-input');
    if(subInput) {
        if(lang === 'ru') subInput.placeholder = "Ваш Email";
        else if(lang === 'uz') subInput.placeholder = "Sizning Emailingiz";
        else subInput.placeholder = "Your Email";
    }
    toggleLangMenu();
}

// --- ФОНОВЫЙ СЛАЙДЕР (HERO) ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
setInterval(() => {
    if(slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}, 4000);

// --- ИНТЕРАКТИВНЫЕ ТАБЛИЧКИ ---
function openTab(evt, tabName) {
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- БОЛЬШОЙ СЛАЙДЕР ГАЛЕРЕИ ---
let galleryIndex = 0;
const gallerySlides = document.querySelectorAll('.gallery-slide');
const galleryDots = document.querySelectorAll('.dot');

function updateGallery() {
    gallerySlides.forEach(s => s.classList.remove('active'));
    galleryDots.forEach(d => d.classList.remove('active'));
    if(gallerySlides[galleryIndex]) gallerySlides[galleryIndex].classList.add('active');
    if(galleryDots[galleryIndex]) galleryDots[galleryIndex].classList.add('active');
}

function moveGallerySlide(dir) {
    galleryIndex += dir;
    if (galleryIndex >= gallerySlides.length) galleryIndex = 0;
    else if (galleryIndex < 0) galleryIndex = gallerySlides.length - 1;
    updateGallery();
}
function setGallerySlide(idx) {
    galleryIndex = idx;
    updateGallery();
}

// --- КНОПКА СВЯЗИ ВИДЖЕТ ---
function toggleWidgetMenu() {
    document.getElementById('widget-menu').classList.toggle('show');
    document.querySelector('.widget-trigger-btn').classList.toggle('active');
}

// --- ОТПРАВКА ДАННЫХ НА БЭКЕНД И СОХРАНЕНИЕ В БАЗУ ---
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
            alert('Не удалось связаться с сервером бэкенда. Проверьте, запущен ли он.');
        }
    }); // <- Вот эта скобка с точкой с запятой закрывает addEventListener
} // <- Вот эта фигурная скобка закрывает проверку if (subForm)
// --- ОТПРАВКА ДАННЫХ ИЗ ОКОШКА В БАЗУ ДАННЫХ MONGODB ---
const callbackForm = document.getElementById('widget-callback-form');
if (callbackForm) {
    callbackForm.addEventListener('submit', async function(event) {
        event.preventDefault(); // Запрещаем перезагрузку страницы

        const nameInput = document.getElementById('callback-name');
        const phoneInput = document.getElementById('callback-phone');

        try {
            // Отправляем запрос на новый роут сервера
            const response = await fetch('https://onrender.com', {

                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: nameInput.value, phone: phoneInput.value })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Данные успешно отправлены и сохранены в MongoDB!');
                nameInput.value = ''; // Очищаем форму
                phoneInput.value = '';
                toggleWidgetMenu(); // Закрываем окошко
            } else {
                alert('Ошибка сервера: ' + data.error);
            }
        } catch (error) {
            console.error('Ошибка отправки:', error);
            alert('Не удалось связаться с сервером бэкенда.');
        }
    });
}
// Функция открытия и закрытия круглого окошка связи
function toggleWidgetMenu() {
    const menu = document.getElementById('widget-menu');
    const btn = document.querySelector('.widget-trigger-btn');
    if (menu && btn) {
        menu.classList.toggle('show');
        btn.classList.toggle('active');
    }
}
