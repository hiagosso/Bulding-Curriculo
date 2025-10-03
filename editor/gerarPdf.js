let iframe = document.getElementById("meuIframe");
function gerarPdf() {
  const conteudo = iframe.contentDocument || iframe.contentWindow.document;
  conteudo.body.style.width = "800px";

  let bgOriginal = conteudo.body.style.backgroundImage;
  conteudo.body.style.backgroundImage = "none";

  html2pdf()
    .set({
      margin: [30, 20, 20, 30], // superior, direita, inferior, esquerda em mm
      filename: "curriculo_abnt.pdf",
      html2canvas: { scale: 2, backgroundColor: "#ffffff" },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .from(conteudo.body)
    .save()
    .then(() => {
      // 🔹 Restaura o fundo no preview
      conteudo.body.style.backgroundImage = bgOriginal;
    });
}
