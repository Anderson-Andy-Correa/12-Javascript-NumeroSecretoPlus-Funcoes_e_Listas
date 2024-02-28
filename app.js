let numereroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numereroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', 'Você descobriu o número secreto!');
    } else {
        if (chute > numereroSecreto) {
            exibirTextoNaTela('p', 'O númemero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O númemero secreto é maior')
        }
    };
};

function gerarNumeroAleatorio() {
    let numeroMinimo = 1;
    let numeroMaximo = 10;
    return parseInt(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
};
