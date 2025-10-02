const frame = document.getElementById("meuIframe");

// pega todos os campos do editor
const campoNome = document.getElementById("inputNome");
const campoNumero = document.getElementById("inputNumero");
const campoEmail = document.getElementById("inputEmail");
const campoObjetivo = document.getElementById("campoObjetico");
const campoResumo = document.getElementById("campoResumo");
const campoHabilidades = document.getElementById("campoHabilidades");
const campoEducacao = document.getElementById("campoEducacao");
const campoExperiencia = document.getElementById("campoExperiencia");
const colorText = document.getElementById("colorText");

function atualizarIframe() {
  const doc = frame.contentWindow.document;

  doc.body.style.color = colorText.value;
  
  const nome = doc.getElementById("nome");
  const numero = doc.getElementById("numero");
  const email = doc.getElementById("email");
  const objetivo = doc.getElementById("objetivo");
  const resumo = doc.getElementById("resumo");
  const habilidades = doc.getElementById("habilidades");
  const educacao = doc.getElementById("educacao");
  const experiencia = doc.getElementById("experiencia");

  if (nome) nome.innerText = campoNome.value;
  if (numero) numero.innerText = campoNumero.value;
  if (email) email.innerText = campoEmail.value;
  if (objetivo) objetivo.innerText = campoObjetivo.value;
  if (resumo) resumo.innerText = campoResumo.value;
  if (habilidades) habilidades.innerText = campoHabilidades.value;
  if (educacao) educacao.innerText = campoEducacao.value;
  if (experiencia) experiencia.innerText = campoExperiencia.value;
}

// adiciona evento para atualizar em tempo real
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((el) => {
  el.addEventListener("input", atualizarIframe);
});

// atualiza também logo que o iframe terminar de carregar
frame.addEventListener("load", atualizarIframe);
