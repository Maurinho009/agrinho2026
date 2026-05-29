function calcularEconomia() {
    // Simulação educativa de economia de litros de água por hectare usando tecnologia
    const litrosEconomizados = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
    
    const elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `🌍 Com o uso de sensores IoT integrados, sua propriedade economizou aproximadamente <strong>${litrosEconomizados} litros</strong> de água por hectare nesta irrigação!`;
}
