// arquivo de teste 
const utilidades = require('../funcoes');

// conjunto de testes
// describe("<<Descricao>>", () => {} );

// teste em si
// test("<Descricao>", () => {});
// it("<Descricao>", () => {});

describe('Conjunto de teste básico', () => {

    test('exemplo 1 de teste toBe', () => {
        //expect(algo).toBe(algo);
        expect(true).toBe(true);
    });

    test('[3] deve retornar "erro"', () =>{
        //const resultadoSoma = funcoes.matrizInv(input1,input2,input3,input4);
        expect(utilidades.matrizInv(0,0,0,0)).toBe('erro');
    });
    

});

