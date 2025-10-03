const frame = document.getElementById("meuIframe");

function atualizarIframe() {
  const doc = frame.contentWindow.document;
  if (!doc) return;

  // Atualiza campos
  const campos = [
    { id: "nome", value: document.getElementById("inputNome").value },
    { id: "numero", value: document.getElementById("inputNumero").value },
    { id: "email", value: document.getElementById("inputEmail").value },
    { id: "objetivo", value: document.getElementById("campoObjetico").value },
    { id: "resumo", value: document.getElementById("campoResumo").value },
    {
      id: "habilidades",
      value: document.getElementById("campoHabilidades").value,
    },
    { id: "educacao", value: document.getElementById("campoEducacao").value },
    {
      id: "experiencia",
      value: document.getElementById("campoExperiencia").value,
    },
  ];

  campos.forEach((c) => {
    const el = doc.getElementById(c.id);
    if (el) el.innerText = c.value;
  });

  // Atualiza cor
  doc.body.style.color = document.getElementById("colorText").value;

  // Ajusta altura do iframe dinamicamente
  setTimeout(() => {
    frame.style.height = doc.body.scrollHeight + "px";
  }, 50);
}

// Eventos
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((el) => el.addEventListener("input", atualizarIframe));
document.getElementById("colorText").addEventListener("input", atualizarIframe);

// Ajusta altura logo que o iframe carrega
frame.addEventListener("load", atualizarIframe);
