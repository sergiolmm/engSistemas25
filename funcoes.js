// minhasFuncoes.js
const math = require('mathjs');

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function matrizInv(a,b,c,d){
    // Calcula a matriz inversa
    console.log("Iniciando Calculo1");  
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    const num3 = parseInt(c);
    const num4 = parseInt(d);
    console.log('%d %d %d %d', num1,num2, num3, num4);
try {
  const matrizA = math.matrix([
  [ num1, num2],
  [ num3, num4]
    ]);
  console.log("Iniciando Calculo1")  
  console.log(matrizA.toString());
  const matrizInversaA = math.inv(matrizA);
  console.log('Matriz A original:');
  console.log(matrizA.toString());
  console.log('\nMatriz inversa de A:');
  console.log(matrizInversaA.toString());
  return matrizInversaA.toString()
 } catch (error) {
  console.log('\nErro ao calcular a inversa. Verifique se a matriz é invertível (determinante diferente de zero).');
    return "erro"
}
}

// Exporta as funções em um objeto
module.exports = {
  somar,
  multiplicar,
  matrizInv
};