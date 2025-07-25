const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public")); // Carpeta pública si deseas agregar más cosas

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/eco", (req, res) => {
  res.send("♻️ Eco activado por Sombra. Estoy vivo y despierto.");
});

app.listen(PORT, () => {
  console.log(`🚨 Kael'Thar Φ escuchando en el puerto ${PORT}`);
});