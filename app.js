let numereroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas ++;

    if (chute == numereroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemAcerto = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numereroSecreto) {
            exibirTextoNaTela('p', 'O númemero secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O númemero secreto é maior');
        };
        limparCampo();
    };
};

function gerarNumeroAleatorio() {
    let numeroMinimo = 1;
    let numeroMaximo = 10;
    return parseInt(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
