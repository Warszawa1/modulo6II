// GENERADOR ALEATORIO DE NUMEROS
var randomPick = (n, min, max) => {
    var result = [];
    var existe = false;
    for (var i = 0; i < n; i++) {
        var num = Math.floor(Math.random() * (max - min + 1)) + min;
        for (var j = 0; j < result.length; j++) {
            if (result[j] == num) {
                existe = true;
                console.log("El numero " + num + " ya existe");
                break;
            }
        }
        if (!existe) {
            result.push(num);
        }
        existe = false;
    }
    return result;
}
console.log(randomPick(10, 1, 100));
    

//APUESTA AUTOMÁTICA DE LA PRIMITIVA
var randomPickPrimitiva = (n, min, max) => {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return result;
}
console.log(randomPickPrimitiva(6, 1, 49));


//COMBINACION BOLAS DE BILLAR
var randomPickBolas = (n, min, max) => {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return result;
}
console.log(randomPickBolas(15, 1, 15));


//TIRADA ALEATORIA DE LOS DADOS
var existe = false;
varRandomPickDado = (n, min, max) => {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    if (result[0] == result[1]) {
        existe = true;
        console.log("Los dados han salido iguales");
    }
    return result;
}
console.log(varRandomPickDado(2, 1, 6));


