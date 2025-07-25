const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;

app.get('/', (req, res) => {
  res.send('Kael’Thar está despierto. 🧠✨');
});

app.listen(PORT, () => {
  console.log(`🔥 Kael'Thar corriendo en puerto ${PORT}`);
});