const example = require("../dist/example.class")

test("Tem que ser igual a 10", () => {
    expect(example.retorna10()).toBe(10)
})

test("Tem que ser null", () => {
    expect(example.retornaNull()).toBeNull()
})

test("Tem que ser Undefined", () => {
    expect(example.retornaUndefined()).toBeUndefined()
})

test("Tem que ser defined", () => {
    expect(example.retornaDefined()).toBeDefined()
})

test("Tem que ser verdadeiro", () => {
    expect(example.retornaTrue()).toBeTruthy()
})

test("Tem, que ser mentira", () => {
    expect(example.retornaFalse()).toBeFalsy()
})

test("Tem que ter o valor Dede", () => {
    expect(example.retornaArray()).toContain("Dede")
})

// tudo tem que estar igual ao array os nomes e posições
test("Tem quer ser tudo igual", () => {
    expect(example.retornaArray()).toEqual(["Anderson", "Dede", "Lilia", "Raphael"])
})

// vamos inverter a logica aqui pois, eu não quero que o array que eu vou escrever aqui seja igual ao da função. Esse not pode ser usado para qualquer operador que eu quiser
test("Não tem quer ser tudo igual", () => {
    expect(example.retornaArray()).not.toEqual(["Dede", "Raphael", "Lilia", "Anderson"])
})

test("Tem que ser maior", () => {
    expect(example.retorna10()).toBeGreaterThan(7)
})

test("Tem que ser maior ou igual", () => {
    expect(example.retorna10()).toBeGreaterThanOrEqual(10)
})

test("Tem que ser menor", () => {
    expect(example.retorna10()).toBeLessThan(15)
})

test("Tem que ser menor ou igual", () => {
    expect(example.retorna10()).toBeLessThanOrEqual(10)
})

// criando regex -->  expressão regular
test("Tem que conter Hello ou world", () => {
    expect(example.retornaDefined()).toMatch(/Hello | pipoca/)
})

// temos essa outra forma de criar regex -->  expressão regular dentro do teste
test("Tem que conter Hello ou world diferente", () => {
    expect(example.retornaDefined()).toMatch(new RegExp("Hello | world"))
})

// a sintaxe do toThrow e diferente temos que usar assim o toThrow server para testar maos de uma função 
test("Tem que retornar exception", () => {
    expect(() => {
        example.retornaException()
    }).toThrow
})

/* Para a API vamos criar testes um pouquinhos diferentes que chamamos de super testes
s super testes eles servem para testar os HTTP
E também um pacote assim como o jest que vai se integrar com o jest, os dois em conjuntos conseguem testar as requisições HTTP 
*/

