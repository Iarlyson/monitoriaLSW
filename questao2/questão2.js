
//2ª Questão
function Carta () {

    var  numero = document.getElementById("pNumero").value;
    var naipe = document.getElementById("naipe").value;
    exibir();

    function  exibir (){
        switch (numero){
            case 1 : 
                alert("Ás de " + naipe);
                break;
            case 11 : 
            alert("Valete de " + naipe);
                break;
            case 12 : 
            alert("Dama de " + naipe);
                break;
            case 13 : 
            alert("Rei de " + naipe);
                break;
            default :
            alert(numero + " de " +naipe);
                break;
        }
    }
}

