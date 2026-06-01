// Espera o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const btnSaibaMais = document.getElementById('btn-saiba-mais');

    if (btnSaibaMais) {
        btnSaibaMais.addEventListener('click', () => {
            mostrarMensagemSucesso();
        });
    }
});

function mostrarMensagemSucesso() {
    alert("Obrigado pelo seu interesse! Juntos, podemos construir uma produção forte que respeita, preserva e caminha de mãos dadas com o meio ambiente.");
}
