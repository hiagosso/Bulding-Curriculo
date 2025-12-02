import formatarTelefone from './FormatarTelefone.js';
import { hidePreview } from './Preview.js';

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 55; // posição inicial

  // --- NOVO: adicionar divisão vertical ---
  function addVerticalDivider() {
    doc.setLineWidth(1);
    doc.setDrawColor(150, 150, 150);
    doc.line(105, 10, 105, 290); // linha no meio da página
  }

  // função para adicionar seções
  function addSection(titulo, conteudo) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    doc.text(titulo, 20, y);
    y += 7;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    let texto = doc.splitTextToSize(conteudo, 170);
    doc.text(texto, 20, y);
    y += texto.length * 7 + 5;
  }

  function addDivider() {
    doc.setLineWidth(0.5);
    doc.setDrawColor(100, 100, 100);
    doc.line(20, y, 190, y);
    y += 10;
  }

  // campos do html
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("Cidade").value;
  const telefone = formatarTelefone(document.getElementById("telefone").value);
  const email = document.getElementById("email").value;
  const linkdln = document.getElementById("Linkdln").value;
  const github = document.getElementById("Github").value;
  const objetivo = document.getElementById("Objetivo").value;
  const resumo = document.getElementById("resumo").value;
  const habilidades = document.getElementById("habilidades").value;
  const formacao = document.getElementById("formacao").value;
  const experiencia = document.getElementById("experiencia").value;

  // título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(nome, 20, 20);

  // contatos
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`${cidade}`, 20, 30);
  doc.text(`Telefone: ${telefone}`, 20, 37);
  doc.text(`Email: ${email}`, 20, 44);

  if (linkdln) doc.text(`LinkedIn: ${linkdln}`, 20, 51);
  if (github) doc.text(`Github: ${github}`, 20, 58);

  // --- ADICIONA A LINHA VERTICAL NO MEIO ---
  addVerticalDivider();

  y = 70;

  // seções
  addDivider();
  addSection("Objetivo", objetivo);
  addDivider();
  addSection("Resumo Profissional", resumo);
  addDivider();
  addSection("Habilidades", habilidades);
  addDivider();
  addSection("Formação", formacao);

  if (experiencia) {
    addDivider();
    addSection("Experiências", experiencia);
  }

  doc.save("curriculo.pdf");
  hidePreview();
}

window.gerarPDF = gerarPDF;

const downloadBtn = document.getElementById('download');
