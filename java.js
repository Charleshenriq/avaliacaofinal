let primeiro = document.querySelector('#primeiroNumero');
let segundo = document.querySelector('#segundoNumero');
let primeiroValor = parseInt(primeiro.value);
let segundoValor = parseInt(segundo.value);
let resultado = calcularResultado(primeiroValor + segundoValor);

function calcularResultado() {
    let resultado = primeiroValor + segundoValor;
    return resultado;
}

function enviar() {
    let divMensagem = document.querySelector('#resultadoSoma');
    let div = document.createElement('div');
    divMensagem.append(div);
    div.classList.add(estilo);


    if (resultado/2 === 1){
        estilo = 'impares';
        return estilo;
    }
    else {
        estilo = 'pares';
        return estilo;
    }

}

function resultadoSoma() {
    let divSoma = document.querySelector('#resultadoSoma div');
    let soma = 0;
    for (let div of resultadoSoma) {
        let resultado = parseInt(document.textContent);
        soma += resultado;
    }
    let divSoma = document.querySelector('#resultadoSoma');
    divSoma.textContent = soma;
}

