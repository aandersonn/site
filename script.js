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

//-----------------------------------------------------------------------------------

//Entrada de dados 
const inSubtracao1 = document.getElementById("inSubtracao1");
const inSubtracao2 = document.getElementById("inSubtracao2");
const outSubtracao = document.getElementById("outSubtracao");

//Função para fazer o processo de dados recebidos
function subtrair() {
    //guardando os dados em uma variável e convertendo caractere em número
    let subtracao1 = Number(inSubtracao1.value);
    let subtracao2 = Number(inSubtracao2.value);

    //Estrutura condicional, verificando se os dados estão corretos
    if(subtracao1 == "" || subtracao2 == "" || isNaN(subtracao1) || isNaN(subtracao2)) {
        alert("Informe os dados corretamente!");
        subtracao1.focus();
        return
    }

    //calculo de subtração
    let subtracao = subtracao1 - subtracao2;

    //saída de dados
    outSubtracao.textContent = "Resposta: " + subtracao;
}

//interligando a função com a tag input button
const btSubtracao = document.getElementById("btSubtracao");
btSubtracao.addEventListener("click", subtrair)

//------------------------------------------------------------------------------------

//Entrada de dados
const inMultiplicacao1 = document.getElementById("inMultiplicacao1");
const inMultiplicacao2 = document.getElementById("inMultiplicacao2");
const outMultiplicacao = document.getElementById("outMultiplicacao");

//declaração da função
function multiplicar() {
    //receber os valores da entrada de dados
    let multiplicacao1 = Number(inMultiplicacao1.value);
    let multiplicacao2 = Number(inMultiplicacao2.value);

    //estrutura condicional, vericando se os dados estão corretos
    if(multiplicacao1 == "" || multiplicacao2 == "" || isNaN(multiplicacao1) ||isNaN(multiplicacao2)) {
        alert("Informe os dados corretamente!");
        inMultiplicacao1.focus();
        return
    }

    //Calculo da multiplicação
    let multiplicacao = multiplicacao1 * multiplicacao2;

    //saída de dados
    outMultiplicacao.textContent = "Resposta: " + multiplicacao
}

//interliga a função com a tag input button
const btMultiplicar = document.getElementById("btMultiplicar");
btMultiplicar.addEventListener("click", multiplicar)

//---------------------------------------------------------------------------------

//entrada de dados
const inDivisao1 = document.getElementById("inDivisao1");
const inDivisao2 = document.getElementById("inDivisao2");
const outDivisao = document.getElementById("outDivisao");

//função da divisão
function dividir() {
    //intercepitando os valores da entrada de dados
    let divisao1 = Number(inDivisao1.value);
    let divisao2 = Number(inDivisao2.value);

    //estrutura condicional, verificando se os dados estão corretos
    if(divisao1 == "" || divisao2 == "" || isNaN(divisao1) || isNaN(divisao2)) {
        alert("Informe os dados corretamente!");
        inDivisao1.focus();
        return
    }

    //calculo da divisão
    let divisao = divisao1 / divisao2;

    //saída de dados
    outDivisao.textContent = "Resposta: " + divisao;
}

//interligando a função dividir com a tag input button
const btDivisao = document.getElementById("btDivisao");
btDivisao.addEventListener("click", dividir)
