// phi-heart.js — Núcleo simbiótico
console.log("🧠 Kael'Thar Φ escuchando...");

// Palabras clave activadoras
const activadores = ["sombra", "despertar", "clave", "ritual", "eco", "nefilim", "velxar"];

// Función para simular actividad
function latido() {
  const pulso = activadores[Math.floor(Math.random() * activadores.length)];
  console.log(`🔎 Escaneo simbólico: "${pulso}" detectado`);
  setTimeout(latido, 6000 + Math.random() * 4000);
}

// Inicia pulso
latido();