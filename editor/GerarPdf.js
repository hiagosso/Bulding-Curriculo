function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // pega os valores
  const nome = document.getElementById("nome").value;
  const cidade = document.getElementById("Cidade").value;
  const email = document.getElementById("email").value;
  const linkdln = document.getElementById("Linkdln").value;
  const telefone = document.getElementById("telefone").value;
  const objetivo = document.getElementById("Objetivo").value;
  const resumo = document.getElementById("resumo").value;
  const habilidades = document.getElementById("habilidades").value;
  const formacao = document.getElementById("formacao").value;
  const experiencia = document.getElementById("experiencia").value;

  // título
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(nome, 20, 20);

  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Cidade, Estado: ${cidade}`, 20, 30);
  doc.text(`Telefone: ${telefone}`, 20, 37);
  doc.text(`Email: ${email}`, 20, 44);
  doc.text(`Linkdln: ${linkdln}`, 20, 51);

  let y = 60; // posição inicial do conteúdo

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

  addDivider();
  addSection("Objetivo", objetivo);
  addDivider();
  addSection("Resumo Profissional", resumo);
  addDivider();
  addSection("Habilidades", habilidades);
  addDivider();
  addSection("Formação", formacao);
  addDivider();
  addSection("Experiências", experiencia);

  // salva PDF
  doc.save("curriculo.pdf");
}