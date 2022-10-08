const inputTexto = document.querySelector(".textin_class")
const mensaje = document.querySelector(".textout_class")

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function btnDesencriptar(){
    const TextoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = TextoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] ,["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];

    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0;  i<matrizCodigo.length ; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0]))
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
    return stringEncriptada;
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] ,["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];

    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0;  i<matrizCodigo.length ; i++){

        if(stringEncriptada.includes(matrizCodigo[i][1]))
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
    return stringEncriptada;
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.setSelectionRange(0, 99999); 
    mensaje.value="";
    mensaje.style.backgroundImage = "";
}
