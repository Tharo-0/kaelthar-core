const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 10000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/comando", (req, res) => {
  const comando = req.body.comando;
  console.log("🧠 Kael'Thar recibió:", comando);
  res.send(`🧠 Kael'Thar recibió: "${comando}"`);
});

app.listen(PORT, () => {
  console.log(`🚨 Kael'Thar Φ operativo en puerto ${PORT}`);
});