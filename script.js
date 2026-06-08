// Aguarda todo o HTML da página carregar antes de executar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura o botão de calcular através do ID que colocamos no novo HTML
    const botaoCalcular = document.getElementById('btn-calcular');

    // Cria um "ouvinte" que dispara a função quando o usuário clica no botão
    botaoCalcular.addEventListener('click', () => {
        
        // Captura os elementos de entrada e saída de dados
        const hectaresInput = document.getElementById('hectares').value;
        const resultadoDiv = document.getElementById('resultado-texto');
        
        // Validação: verifica se o número é menor/igual a zero ou vazio
        if (hectaresInput <= 0 || hectaresInput === "") {
            resultadoDiv.style.color = "#ff6b6b"; // Cor vermelha para erro
            resultadoDiv.innerHTML = "Por favor, insira um número válido de hectares.";
            return; // Interrompe a execução aqui se houver erro
        }
        
        // Cálculo (50.000 litros de água economizados por hectare/ano)
        const litrosEconomizados = hectaresInput * 50000;
        
        // Exibe o resultado de sucesso com formatação regional (ex: 1.000.000)
        resultadoDiv.style.color = "#ffffff"; // Cor branca para leitura no fundo verde
        resultadoDiv.innerHTML = `Adotando tecnologia de irrigação precisa em <strong>${hectaresInput}</strong> hectare(s), estima-se uma economia de aproximadamente <strong>${litrosEconomizados.toLocaleString('pt-BR')}</strong> litros de água por ano! 💧🌱`;
    });
});
