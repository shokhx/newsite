const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Разрешаем вашему сайту shokhx.github.io присылать данные в облако
app.use(cors({
    origin: 'https://github.io',
    credentials: true
}));
app.use(express.json());

// Подключение к ВАШЕЙ точной облачной базе данных MongoDB Atlas
mongoose.connect('mongodb://shokhgoog2007_db_user:GEUGchxVvZaaCIaK@cluster0.cii8bae.mongodb.net/bio_website?appName=Cluster0')
    .then(() => console.log('Успешное подключение к MongoDB Atlas!'))
    .catch(err => console.error('Ошибка подключения к базе:', err));

// Schema для подписчиков (Email)
const SubscriberSchema = new mongoose.Schema({
    email: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const Subscriber = mongoose.model('Subscriber', SubscriberSchema);

// Schema для заявок (Имя + Телефон)
const CallbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
const Callback = mongoose.model('Callback', CallbackSchema);

// Маршрут для сохранения Email
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ error: 'Email обязателен' });
        const newSubscriber = new Subscriber({ email });
        await newSubscriber.save();
        res.status(201).json({ message: 'Email успешно сохранен!' });
    } catch (error) { res.status(500).json({ error: 'Ошибка сервера' }); }
});

// ... Маршрут для сохранения Контактов
app.post('/api/callback', async (req, res) => {
    try {
        const { name, phone } = req.body;
        if (!name || !phone) return res.status(400).json({ error: 'Имя и телефон обязательны!' });
        const newCallback = new Callback({ name, phone });
        await newCallback.save();
        res.status(201).json({ message: 'Контактные данные успешно сохранены!' });
    } catch (error) { res.status(500).json({ error: 'Ошибка сервера при сохранении контактов' }); }
});

app.listen(PORT, () => {
    console.log(`Сервер бэкенда запущен на порту ${PORT}`);
});
