document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("commandForm");
  const input = document.getElementById("commandInput");
  const responseDiv = document.createElement("div");
  responseDiv.style.marginTop = "30px";
  responseDiv.style.fontSize = "20px";
  document.body.appendChild(responseDiv);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const command = input.value.trim();
    if (!command) return;

    responseDiv.innerHTML = "⏳ Procesando comando simbólico...";

    try {
      const res = await fetch("/api/comando", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mensaje: command }),
      });

      const data = await res.json();
      if (data && data.respuesta) {
        responseDiv.innerHTML = `🔮 Respuesta simbólica: <strong>${data.respuesta}</strong>`;
      } else {
        responseDiv.innerHTML = "⚠️ No se recibió respuesta válida.";
      }
    } catch (err) {
      responseDiv.innerHTML = "❌ Error al procesar el comando.";
      console.error(err);
    }

    input.value = "";
  });
});