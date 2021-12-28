let alfabetoNormal =     "abcdefghijklmnopqrstuvwxyz:()!¡,'ñABCDEFGHIJKLMNOPQRSTUVWXYZÑ"; 
let alfabetoEncriptado = "qwertyuiopasdfghjklñzxcvbnm:()!¡,'QWERTYUIOPASDFGHJKLÑZXCVBNM";

let btnEncriptar = document.getElementById("encrypt");
let btnDesencriptar = document.getElementById("decrypt");


function transform(text, alfabetoNormal, alfabetoEncriptado){
    let resultado = "";
    for (let i = 0; i < text.length; i++) {
        let letra = text[i];
        let posicion = alfabetoNormal.indexOf(letra);
        if (posicion >= 0) {
            letra = alfabetoEncriptado[posicion];
        }
        resultado += letra;
    }
    return resultado;
}


let getEncryptedText = () => {
    let encryptedText = document.getElementById("encryptText").value;
    let textoTransformado = transform(encryptedText, alfabetoNormal, alfabetoEncriptado);
    document.getElementById("decryptText").value = textoTransformado;
}

let getDecryptedText = () => {
    let decryptedText = document.getElementById("decryptText").value;
    let textoTransformado = transform(decryptedText, alfabetoEncriptado, alfabetoNormal);
    document.getElementById("backToNormal").value = textoTransformado;
}

encrypt.addEventListener('click', getEncryptedText);
decrypt.addEventListener('click', getDecryptedText);
