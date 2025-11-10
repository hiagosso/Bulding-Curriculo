import formatarTelefone from './FormatarTelefone.js';

export function hidePreview() {
    const preview = document.getElementById('preview');
    preview.style.visibility = 'hidden';
    // restaurar rolagem do body
    document.body.style.overflow = '';
}

function showPreview() {
    //pega os valores
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

    // popula o iframe com os valores
    const iframe = document.getElementById('iframePreview');
    iframe.onload = () => {
        const doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.getElementById('nome').innerText = nome;
        doc.getElementById('cidade').innerText = cidade;
        doc.getElementById('telefone').innerText = 'Telefone: ' + telefone;
        doc.getElementById('email').innerText ='Email: ' + email;
        // verifica se os campos de linkdln e github estão preenchidos antes de adicionar ao preview
        if (linkdln) {
            const linkElement = doc.getElementById('link');
            linkElement.style.display = 'block';
            linkElement.innerText = 'Linkdln: ' + linkdln;
        }
        if (github) {
            const git = doc.getElementById('git');
            git.style.display = 'block';
            git.innerText = 'Github: ' + github;
        }
        doc.getElementById('objetivo-text').innerText = objetivo || '';
        doc.getElementById('resumo-text').innerText = resumo || '';
        doc.getElementById('habilidades-text').innerText = habilidades || '';
        doc.getElementById('formacao-text').innerText = formacao || '';
        if (experiencia) {
            const libha = doc.getElementById('linha');
            libha.style.display = 'block';
            const expe = doc.getElementById('expe');
            expe.style.display = 'block';
            doc.getElementById('experiencias-text').innerText = experiencia;
        }
    };
    // força recarregar o iframe caso já esteja carregado
    iframe.src = iframe.src;

    // verifica se algum campo obrigatório está vazio
    if (!nome || !cidade || !telefone || !objetivo || !resumo || !formacao || !email) {
        alert("Há campos obrigatórios vazios! Por favor, preencha todos os campos necessários.");
        return;
    }
    const preview = document.getElementById('preview');
    // bloquear rolagem do fundo e mostrar modal
    document.body.style.overflow = 'hidden';
    preview.style.visibility = 'visible';
}

// Expor funções para o escopo global para que chamadas inline (onclick) funcionem
window.showPreview = showPreview;
window.hidePreview = hidePreview;