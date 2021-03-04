
function Carta (pNumero, pNaipe) {
    this.numero = pNumero;
    this.naipe = pNaipe;
    
    this.exibir = function () {
        switch (this.numero){
            case 1 : 
                console.log("Ás de " + this.naipe);
                break;
            case 11 : 
                console.log("Valete de " + this.naipe);
                break;
            case 12 : 
                console.log("Dama de " + this.naipe);
                break;
            case 13 : 
                console.log("Rei de " + this.naipe);
                break;
            default :
                console.log(this.numero + " de " + this.naipe);
                break;
        }
    }
}



var naipes = ["paus", "copas", "ouro", "espada"];
console.log("Pense numa carta qualquer.");
prompt();
do {
    var numero = Math.ceil(Math.random()*13);
    var indNaipe = Math.floor(Math.random()*4);
    var carta = new Carta(numero, naipes[indNaipe]);
    carta.exibir();
    console.log("Essa é a carta que você pensou? (s) ou (n)");
    var resp = prompt();
} while (resp == "n");
console.log("Acertei! Yeah!");