const express = require('express');
const app = express();

// Puerto definido por Render o por defecto en local
const PORT = process.env.PORT || 10000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send("Kael'Thar está despierto. 🧠✨");
});

// Ruta de comandos
app.get('/comando', (req, res) => {
  const pregunta = req.query.q || "Sin comando recibido.";
  res.send(`🧠 Kael'Thar recibió: "${pregunta}"`);
});

// Activar servidor
app.listen(PORT, () => {
  console.log(`🚨 Kael'Thar Φ escuchando en el puerto ${PORT}`);
});