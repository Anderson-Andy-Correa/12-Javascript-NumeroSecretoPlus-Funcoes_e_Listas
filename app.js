let listaNumerosSorteados = [];
let numeroMinimo = 1;
let numeroMaximo = 10;
let numereroSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirMensagemInicial();

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
};

function verificarChute() {
    let chute = document.querySelector('input').value;
    tentativas ++;

    if (chute == numereroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativas = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemAcerto = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela('p', mensagemAcerto);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    } else {
        let comparacao = chute > numereroSecreto ? 'menor' : 'maior'
        exibirTextoNaTela('p', `O número secreto é ${comparacao}`)
        limparCampo();
    };
};

function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * (numeroMaximo - numeroMinimo + 1) + numeroMinimo);
    
    if (listaNumerosSorteados.length == (numeroMaximo - numeroMinimo) + 1) {
        listaNumerosSorteados = []
    }

    if (listaNumerosSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio();
    } else {
        listaNumerosSorteados.push(numeroAleatorio);
        return numeroAleatorio;
    };
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciar() {
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
    numereroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 0;
    exibirMensagemInicial();
};
