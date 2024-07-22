const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('views'));

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Rutas para las operaciones de la calculadora
app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) + parseFloat(b);
  res.send(`Resultado: ${result}`);
});

app.get('/subtract', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) - parseFloat(b);
  res.send(`Resultado: ${result}`);
});

app.get('/multiply', (req, res) => {
  const { a, b } = req.query;
  const result = parseFloat(a) * parseFloat(b);
  res.send(`Resultado: ${result}`);
});

app.get('/divide', (req, res) => {
  const { a, b } = req.query;
  if (parseFloat(b) === 0) {
    res.send('Error: División por cero');
  } else {
    const result = parseFloat(a) / parseFloat(b);
    res.send(`Resultado: ${result}`);
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://10.10.174.62:${port}`);
});
