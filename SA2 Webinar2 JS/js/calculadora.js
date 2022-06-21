// CÓDIGO DISPONÍVEL EM : http://dontpad.com/fs11

// + soma/concatena(juntar textos)
// - subtrai
// * multiplica
// / divide

// 5 + "5"   (55) 
// 5 + 5     (10)
function calcular() {
    //entrada
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let op = document.getElementById("operacao").value;
    let resultado;//undefined
    
    //processamento
    n1 = parseInt(n1);//transforma um texto em número
    n2 = parseInt(n2);//transforma um texto em número
    
    if(op == '+'){
        resultado = somar(n1, n2);
    } else if ( op == '-' ) {
        resultado = subtrair(n1, n2);
    } else if ( op == '*' ) {
        resultado = multiplicar(n1, n2);
    } else if ( op == '/' ) {
        resultado = dividir(n1, n2);
    } else {//escolha
        resultado = "Oparação Inválida";
    }

    //saída
    // tag span
    document.getElementById("resultado").innerHTML = resultado;
}


function somar(x, y) {
    return x + y;
}

function subtrair(x, y) {
    return x - y;
}

function multiplicar(x, y) {
    return x * y;
}

function dividir(x, y) {
    if (u == 0) {
        return "Não é um número"
    } else {//retorna a conta
        return x / y;
    }
    
}