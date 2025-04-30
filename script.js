/* Домашнее задание №1
Напишите HTTP сервер и реализуйте два обработчика, где:
- По URL “/” будет возвращаться страница, на которой есть гиперссылка на
вторую страницу по ссылке “/about”
- А по URL “/about” будет возвращаться страница, на которой есть гиперссылка
на первую страницу “/”
- Также реализуйте обработку несуществующих роутов (404).
- * На каждой странице реализуйте счетчик просмотров. Значение счетчика
должно увеличиваться на единицу каждый раз, когда загружается страница
*/

const http = require('http');
const url = require('url');

const viewCounters = {
    home: 0,
    about: 0
};

const server = http.createServer((req, res) => {  
    if (req.url === '/') {
        viewCounters.home++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`
            <a href="/about"> Главная страница</a> 
            <p>Просмотров страницы Главная: ${viewCounters.home}</p>
            `);
    } else if(req.url === '/about') {
        viewCounters.about++;
        res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`
            <a href="/"> Cтраница о сайте </a>
            <p>Просмотров страницы О сайте: ${viewCounters.about}</p>
            `);
    } else {
        res.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});
        res.end(`
            <h1> Страница 404</h1>
            <a href="/">Вернуться на главную</a>
          `);
    }
});

const port = '3000';

server.listen(port);

