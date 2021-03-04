function resjustesalario() {

    var salario=document.getElementById("salario").value;;

if(salario<=280){
    var NovoSalario=salario*1.2;
    var aumento=NovoSalario-salario;
    document.getElementById("reajuste").value=salario;
    document.getElementById("percentual").value="20%"
    document.getElementById("aumento").value=aumento;
    document.getElementById("novosalario").value=NovoSalario;

}
else if((salario>280 && salario<=700)){
    var NovoSalario=salario*1.15;
    var aumento=NovoSalario-salario;
    document.getElementById("reajuste").value=salario;
    document.getElementById("percentual").value="15%"
    document.getElementById("aumento").value=aumento;
    document.getElementById("novosalario").value=NovoSalario;
}
else if((salario>700 && salario<=1500)){
    var NovoSalario=salario*1.1;
    var aumento=NovoSalario-salario;
    document.getElementById("reajuste").value=salario;
    document.getElementById("percentual").value="10%"
    document.getElementById("aumento").value=aumento;
    document.getElementById("novosalario").value=NovoSalario;
}
else{
    var NovoSalario=salario*1.05;
    var aumento=NovoSalario-salario;
    document.getElementById("reajuste").value=salario;
    document.getElementById("percentual").value="5%"
    document.getElementById("aumento").value=aumento;
    document.getElementById("novosalario").value=NovoSalario;
}

}

