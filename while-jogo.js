let resultadoDado;
let lancamentos = 0;

while (resultadoDado !== 6) {
    resultadoDado = Math.floor(Math.random() * 6) + 1;  // gera um número aleatório de 1 a 6
    lancamentos++;
    console.log(`Lançamento ${lancamentos}: resultado do dado: ${resultadoDado}`);
}