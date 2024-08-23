function mostrarBotaoCopiar() {
    const element = document.getElementById("botaoCopiar");
    element.style.display = "block";    
}

function criptografar() {
    limparAreas();
    mostrarBotaoCopiar();
    let textoInformado = document.querySelector('#textarea').value;
    textoInformado = textoInformado.toLowerCase();
    console.log("Texto informado = ", textoInformado);

    let textoCriptografado = [];

    let textoConvertido='';

    for (let i=0; i < textoInformado.length; i++) {
        switch(textoInformado[i]) {
            case "e":
                textoConvertido = "enter";
                break;
            case "i":
                textoConvertido = "imes";
                break;
            case "a":
                textoConvertido = "ai";
                break;
            case "o":
                textoConvertido = "ober";
                break;
            case "u":
                textoConvertido = "ufat";
                break;
            default:
                textoConvertido = textoInformado[i];
                break;
          }

        textoCriptografado.push(textoConvertido);

    }

    let stringCriptografada = textoCriptografado.join('');
    document.getElementById("resultado").innerHTML = stringCriptografada;
    console.log(stringCriptografada);
    return stringCriptografada;

}

function limparArea(id) {
    const element = document.getElementById(`${id}`);
    element.style.display = "none";
}


function descriptografar() {
    limparAreas();

    let textoInformado = document.querySelector('#textarea').value;
    textoInformado = textoInformado.toLowerCase();
    
    let resultado = "";
    
    console.log("Texto = ", textoInformado);

    resultado = textoInformado.replace(/enter/gi, "e");
    resultado = resultado.replace(/imes/gi, "i");
    resultado = resultado.replace(/ai/gi, "a");
    resultado = resultado.replace(/ober/gi, "o");
    resultado = resultado.replace(/ufat/gi, "u");

    let result = document.getElementById('resultado');
    result.style.display = "block"; //reexibir caso tenha vindo do copiar
    result.innerText = resultado;
    console.log("stringDescriptografada: ", resultado);
    return resultado;
}

function exibirTextoNaTela(id, texto, som) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
    if (som) {
        falarMensagem(texto);
    }

}

function limparAreas() {
    limparArea("imagemLupa");
    limparArea("textoVazio");
    limparArea("textoVazioDigite");
    return null;
}

function copiar() {
    const resultado = document.getElementById("resultado").innerText;
    exibirTextoNaTela("resultado", "Nenhuma mensagem.", false);
    const input = document.getElementById("textarea");
    input.value = resultado;
    limparAreas();
}

function falarMensagem(texto) {
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.23});
}

function montarCabecalho() {
    const hoje = new Date();
    const dia = hoje.getDate();
    let mes = hoje.getMonth()+1;
    mes = mes < 10 ? `0${mes}` : `${mes}`;
    const ano = hoje.getFullYear();
    const dataFormatada = `${dia}/${mes}/${ano}`;
    document.getElementById("hoje").innerHTML = dataFormatada;
}


falarMensagem('Bem-vindo ao decodificador! Digite seu texto!');
montarCabecalho();
