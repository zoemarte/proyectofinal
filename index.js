const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app = express();
const port = process.env.port || 3000;

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    partialsDir: path.join(__dirname, 'views/partials'),
    layoutsDir: path.join(__dirname, 'views/layouts'),
    defaultLayout: 'main'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/layouts/paginicio.html'));
});

app.get('/reservarcita', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/layouts/reservarcita.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/layouts/loginformulario.html'));
});

app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});