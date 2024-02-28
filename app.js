let numereroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    console.log(gerarNumeroAleatorio());
};

function gerarNumeroAleatorio() {
    let numeroMinimo = 1;
    let numeroMaximo = 10;
    return parseInt(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
};
