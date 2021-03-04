let sequencia = [-1.7, 3.0, 0.0, 1.5, 0.0, -1.7, 2.3, -1.7, -1.7];
console.log(sequencia.length-1 + "números compõe a sequência");
console.log(sequencia);
var cont = 1
for(var k = 0; k < sequencia.sort().length; k++){
    if(sequencia[k]==sequencia[k+1]){
        cont+=1;
    }
    else{
        console.log('Saída: '+ sequencia[k] + ' ocorre '+cont+' vezes')
        cont=1;
    }
}