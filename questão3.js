//3ª Questão
function numeroencaixa(numeroUm, numeroDois) {
    var vA= numeroUm;
    var vB= numeroDois;
    
    if(vA.endsWith(vB)){
        console.log("encaixa");
    }
    else{
        console.log("Não encaixa");
    }

}
numeroencaixa("567890", "890");
numeroencaixa("1243", "1243");
numeroencaixa("2457", "245");
numeroencaixa("457", "2457");
