/*Establecer variables con query selector para seleccionar en el HTML,
ademas a mensaje y copiar se pone un display none para que esten ocultos al cargar la pagina*/
const inputTexto = document.querySelector('.texto');
const mensaje = document.querySelector('.mensaje');
const btnCopy = document.querySelector('.copiar');
mensaje.style.display = 'none';
btnCopy.style.display = 'none';
/*Se crea una matriz que contiene las letras y sus sustituciones correspondientes*/
const matrizCodigo = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat'],
];


function encriptar(stringEncriptada) {
    return matrizCodigo.reduce((acc, [searchValue, replaceValue]) => 
            acc.replace(new RegExp(searchValue, 'g'), replaceValue), stringEncriptada.toLowerCase());
}

/*Se define la función "desencriptar" similar a la función "encriptar", 
pero reemplaza los sustitutos con las letras originales.*/
function desencriptar(stringDesencriptada) {
    return matrizCodigo.reduce((acc, [searchValue, replaceValue]) => 
        acc.replace(new RegExp(replaceValue, 'g'), searchValue), stringDesencriptada.toLowerCase());
}
/*El código también tiene funciones "btnEncriptar" y
 "btnDesencriptar" para encriptar y desencriptar texto al presionar un botón respectivamente. */

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = 'none';
    inputTexto.value = '';
    // Ocultar la imagen
    document.querySelector('.dibujo').style.display = 'none';
    document.querySelector('.noneText').style.display = 'none';
    // Mostrar el elemento textarea
    mensaje.style.display = 'block';
    btnCopy.style.display = 'block';
}

function btnDesencriptar() {
const textoEncriptado = desencriptar(inputTexto.value);
mensaje.value = textoEncriptado;
inputTexto.value = '';
}
/*Además, tiene una función "copiar" que selecciona el contenido del elemento 
"mensaje" utilizando el método "select" y lo copia al portapapeles utilizando el método "clipboard.writeText" 
del objeto "navigator", luego vacía el contenido del elemento "mensaje" y muestra una alerta de "Texto Copiado". */
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = '';
    alert('Texto Copiado');
}



