const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Добро пожаловать!</h1><a href="/about">To about</a>');
});
app.get('/about', (req, res) => {
    res.send('<h1>Добро пожаловать на about!</h1><a href="/">To home</a>');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
    
});