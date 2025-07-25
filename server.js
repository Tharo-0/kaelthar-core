const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static("public"));
app.use(express.json());

// Ruta para manejar solicitudes POST desde el frontend
app.post("/api", async (req, res) => {
  const message = req.body.message || "Hola";
  const reply = `🧠 Kael'Thar Φ recibió: "${message}"`;
  res.json({ reply });
});

// Ruta raíz que sirve el HTML
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🧠 Kael'Thar Φ activo en el puerto ${PORT}`);
});