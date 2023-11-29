//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador
alert("Hello World!")

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 2
const numberTwo = 8

alert(`${numberOne + numberTwo}`)

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
const isNumber = 10

if (typeof isNumber === 'number') {
  alert('É um número')
} else {
  alert("Não é um número")
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = "Douglas"

if (typeof isString === 'string') {
  alert('É uma string')
} else {
  alert('Não é uma string')
}

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBool = 20 > 30

if (typeof isBool === 'boolean') {
  alert("É um booleano")
} else {
  alert("Não é booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const subOne = 56
const subTwo = 42

const result = subOne - subTwo
alert(result)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multOne = 10
const multTwo = 12

const resolution = multOne * multTwo
alert(resolution)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const divOne = 10
const divTwo = 12

const division = (divOne / divTwo).toFixed(2)
alert(division)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const firstNumber = 10

if (firstNumber % 2 === 0) {
  alert("É um número par")
} else {
  alert("Não é um número par")
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const secondNumber = 13

if (secondNumber % 2 !== 0) {
  alert("É um número ímpar")
} else {
  alert("Não é um número ímpar")
}