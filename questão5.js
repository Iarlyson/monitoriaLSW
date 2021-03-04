    //5ª Questão
    var frase= "ANA E MARIANA GOSTAM DE BANANA";
    var palavra= "ANA";
    var result=frase.split(" ");
    var cont=0;
    for(var x=0; x<result.length; x++){
        if(palavra==result[x]){
            cont++;
        }
    }
    console.log(" A palavra " +palavra+ "  aparece  " + cont + "  vezes");
