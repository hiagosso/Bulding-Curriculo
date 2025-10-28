// função para formatar telefone
export default function formatarTelefone(numero) {
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