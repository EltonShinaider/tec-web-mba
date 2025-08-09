alert("Bem vindo ao jogo do número secreto");
let numeroMaximo = 100;
let numeroSecreto  = parseInt(Math.random() * numeroMaximo + 1);
console.log("Número secreto: ", numeroSecreto);
let chute;
let tentativas = 1;

while (numeroSecreto != chute) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}:`);
    console.log("Valor do chute: ", chute);

    if (numeroSecreto == chute) {
        break;  
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}.`);
        } else {
            alert(`O número secreto é menor que ${chute}.`);
        }
        
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso ai. Você acertou o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativa}.`);