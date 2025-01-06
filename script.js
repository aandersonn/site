//Entrada de dados
const inSoma1 = document.getElementById("inSoma1");
const inSoma2 = document.getElementById("inSoma2");
const outSoma = document.getElementById("outSoma");

//função para fazer o processo dos dados recebidos
function somar() {
    //guardando os valores em uma variavel e convertendo o caractere em numero
    let soma1 = Number(inSoma1.value);
    let soma2 = Number(inSoma2.value);

    //estrutura condicional, verificando se os dados estão corretos
    if (soma1 == "" || soma2 == "" || isNaN(soma1) || isNaN(soma2)) {
        alert("Informe os dados corretamente!");
        inSoma1.focus();
        return
    }
    //calculo de adição
    let adicao = soma1 + soma2

    //saída de dados
    outSoma.textContent = "Resposta: " + adicao
}

//interligando a função com a tag input button
const btSomar = document.getElementById("btSomar");
btSomar.addEventListener("click", somar)

const inSubtracao1 = document.getElementById("inSubtracao1");
const inSubtracao2 = document.getElementById("inSubtracao2");
const outSubtracao = document.getElementById("outSubtracao");

function subtrair() {
    let subtracao1 = Number(inSubtracao1.value);
    let subtracao2 = Number(inSubtracao2.value);

    if(subtracao1 == "" || subtracao2 == "" || isNaN(subtracao1) || isNaN(subtracao2)) {
        alert("Informe os dados corretamente!");
        subtracao1.focus();
        return
    }

    let subtracao = subtracao1 - subtracao2;

    outSubtracao.textContent = "Resposta: " + subtracao;
}

let btSubtracao = document.getElementById("btSubtracao");
btSubtracao.addEventListener("click", subtrair())


