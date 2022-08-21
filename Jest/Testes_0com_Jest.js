/* Testes com Jest
Introdução e conceitos basicos

O que é o Jest?
Jest é um framework de teste unitário de código aberto Javascript, foi criado pelo Facebook, inicialmente criado para testar o framework React.

O Jest
Jest foi desenvolvido a partir do framework Jasmine. Jest é uma das ferramentas mais usadas para testes unitários dentro da comunidade de Javascript.

O Jest começou a ser usado de forma muito mais ampla do que somente como um framework do React, sendo usado com o Node e Redux, e até mesmo por plataformas Typescript como Angular e Ionic.

Testes unitários
Testes unitários visam a execução de verificações na menor fração do código.

Classes de teste
Conforme o software vai crescendo, se faz cada vez mais necessário a aplicação de uma metodologia de testes, sendo aplicado as classes de testes e utilizando o teste unitário, ganhasse uma vasta ferramenta de cobertura de código.

As classes de testes segmentadas do código, visam maior confiabilidade, pois não implicam em possíveis falhas na funcionalidade.

Matchers
Jest utiliza "Matchers"(combinadores) que são utilizados para realizar os testes efetivamente. Existem diversos matchers para cada situação em particular, dentro do contexto do teste.

Exemplo:
test('descrição do teste', () => {
    expect("valor esperado").toMatch("código testado");
});

.toBe(valor)
Verifique se o valor recebido é igual. Possui as variações abaixo:
toBeNull()
toBeUndefined()
toBeDefined()
toBeTruthy()
toBeFalsy()

.toEqual(valor)
Testa recursivamente os valores dentro de um array.

.not.toEqual(valor)
Cada comparador pode utilizar o .not, para uma comparação oposta.

.toBeGreaterThan()
Verifique se o número passado é maior que o esperado.
Existe a variação .toBeGreaterThanOrEqual()

.toBeLessThan()
Verifique se o número passado é menor que o esperado.
Existe a variação .toBeLessThanOrEqual()

.toMatch()
Aplica verificação de expressão regular.

.toContain()
Verifique se determinado elemento existe dentro de um array.

.toThrow()
Analisa se uma função retorna uma exceção.
Nota: Pode verificar também a mensagem de erro.

Função de Mock
Analisa se uma função retorna uma exceção.
Nota: Pode verificar também a mensagem de erro.

Teste de funções assíncronas
Quando se tem códigos assíncronos, o Jest precisa saber quando o código termina de ser testado.

Instalação
npm install --save-dev jest

Adicionar o jest no package.json
"scripts": {
    "test": "jest"
}












*/