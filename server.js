const express = require('express');
const path = require('path');
const app = express();
app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'paginicio.html'));
});

app.get('/reservarcita', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'reservarcita.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'loginformulario.html'));
});

app.get('/registrarcita', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'registrarcita.html'));
});

app.get('/registrocliente', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'registrocliente.html'));
});

app.get('/registroproducto', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'registroproducto.html'));
});

app.get('/registroventa', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'registroventa.html'));
});

app.get('/pagproductos', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'layouts', 'pagproductos.html'));
});

app.listen(app.get('port'), () => {
  console.log('Servidor funcionando en puerto', app.get('port'));
});