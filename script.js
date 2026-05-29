function simularImpacto() {
    const cenarios = [
        "🚜 Com o Plantio Direto na palha, você reduziu a erosão do solo em até 90% nesta safra!",
        "💧 Sensores de umidade em tempo real geraram uma economia de 35% de água na irrigação hoje.",
        "🐝 A manutenção das áreas de preservação aumentou a presença de polinizadores, melhorando a produtividade.",
        "🛸 O mapeamento por drone permitiu aplicar insumos apenas onde era necessário, economizando recursos."
    ];

    // Sorteia um dos cenários sustentáveis
    const indiceAleatorio = Math.floor(Math.random() * cenarios.length);
    const resultadoDiv = document.getElementById("resultado-simulacao");
    
    // Adiciona efeito visual e exibe a mensagem
    resultadoDiv.style.opacity = 0;
    setTimeout(() => {
        resultadoDiv.innerHTML = cenarios[indiceAleatorio];
        resultadoDiv.style.opacity = 1;
        resultadoDiv.style.transition = "opacity 0.5s ease";
    }, 100);
}
