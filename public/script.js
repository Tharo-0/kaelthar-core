document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const result = document.createElement("p");
  document.body.appendChild(result);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const command = input.value.trim();
    if (!command) return;

    try {
      const res = await fetch("/comando", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mensaje: command })
      });
      const data = await res.json();
      result.textContent = `🧠 Kael'Thar Φ respondió: "${data.respuesta}"`;
      input.value = "";
    } catch (err) {
      result.textContent = "❌ Error al conectar con Kael'Thar Φ.";
    }
  });
});