// pega os valores
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


const { jsPDF } = window.jspdf;
const doc = new jsPDF();
let y = 55; // posição inicial do conteúdo

function addSection(titulo, conteudo) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text(titulo, 20, y);
  y += 7;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  let texto = doc.splitTextToSize(conteudo, 170); // quebra de linha automática
  doc.text(texto, 20, y);
  y += texto.length * 7 + 5; // ajusta altura
}

function addDivider() {
  doc.setLineWidth(0.5);
  doc.setDrawColor(100, 100, 100); // cinza
  doc.line(20, y, 190, y); // desenha a linha
  y += 10; // pula espaço depois da linha
}

function formatarTelefone(numero) {
  // Remove tudo que não for número
  numero = numero.replace(/\D/g, "");

  if (numero.length === 11) {
    // Formato: (XX) XXXXX-XXXX
    return numero.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (numero.length === 10) {
    // Formato: (XX) XXXX-XXXX
    return numero.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  } else {
    return numero; // retorna como está se não tiver 10 ou 11 dígitos
  }
}

function gerarPDF() {

  // título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(nome, 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`${cidade}`, 20, 30);
  doc.text(`Telefone: ${telefone}`, 20, 37);
  doc.text(`Email: ${email}`, 20, 44);
  
  if (linkdln) {
    y = 60;
    doc.text(`Github: ${github}`, 20, 51);
  } 
  if (github) {
    y = 65;
    doc.text(`Github: ${github}`, 20, 58);
  } 
    
  addDivider();
  addSection("Objetivo", objetivo);
  addDivider();
  addSection("Resumo Profissional", resumo);
  addDivider();
  addSection("Habilidades", habilidades);
  addDivider();
  addSection("Formação", formacao);
  if(experiencia){
  addDivider();
  addSection("Experiências", experiencia);
  }
  // salva PDF
  doc.save("curriculo.pdf");
}


const btn = document.getElementById("btnGerarPdf");
btn.addEventListener('click',()=>{
  if (!nome && !cidade && !telefone && !objetivo && !resumo && !formacao) {
  //   window.alert("Ha campos vazios")
  }
  gerarPDF();
})