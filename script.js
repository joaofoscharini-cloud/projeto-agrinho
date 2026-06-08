function calcularEconomia() {
    // Captura os elementos do HTML através do ID
    const hectaresInput = document.getElementById('hectares').value;
    const resultadoDiv = document.getElementById('resultado-texto');
    
    // Validação de segurança: verifica se o número inserido é válido
    if (hectaresInput <= 0 || hectaresInput === "") {
        resultadoDiv.style.color = "#ff6b6b"; // Aplica cor vermelha para erro
        resultadoDiv.innerHTML = "Por favor, insira um número válido de hectares.";
        return; // Interrompe a execução da função
    }
    
    // Cálculo estimado (50.000 litros de água economizados por hectare/ano)
    const litrosEconomizados = hectaresInput * 50000;
    
    // Formata o resultado visual para o utilizador
    resultadoDiv.style.color = "#ffffff"; // Garante a cor branca para o sucesso
    resultadoDiv.innerHTML = `Adotando tecnologia de irrigação precisa em <strong>${hectaresInput}</strong> hectare(s), estima-se uma economia de aproximadamente <strong>${litrosEconomizados.toLocaleString('pt-BR')}</strong> litros de água por ano! 💧🌱`;
}
