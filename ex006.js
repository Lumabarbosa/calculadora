const prompt = require('prompt-sync')();

var n1 = Number(prompt('Digite um número: '))
var op = prompt('Digite o símbolo da operação que deseja realizar +, -, * ou /  :  ')
var n2 = Number(prompt('Digite outro número: '))

var resto
switch (op) {
    case '+':
        console.log(n1 + n2)
        break
    case '-':
        console.log(n1-n2)
        break
    case '*':
        console.log(n1*n2)
        break
    case '/':
        console.log(parseInt(n1/n2))
        console.log(`Com resto ${resto = n1%n2}`)
        break
}