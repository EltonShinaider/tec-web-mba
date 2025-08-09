const number1 = 20
const number2 = 10
const operador = "*"

const multiplicacao = number1 * number2
const soma = number1 + number2
const subtracao = number1 - number2
const divisao = number1 / number2

switch (operador) {
    case "+":
        console.log(soma)
        break
    case "-":
        console.log(subtracao)
        break
    case "*":
        console.log(multiplicacao)
        break
    case "/":
        if (number2 === 0) {
            console.log("Não é possível dividir por 0")
        } else {
            console.log(divisao)
        }
        break
    default:
        console.log("Operador inválido")
}
console.log("Fim do programa")