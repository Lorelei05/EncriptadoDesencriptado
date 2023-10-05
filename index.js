// Manejar el evento 'click' del botón 'Encriptar'
document.getElementById('encriptar').addEventListener('click', function () {
    // Obtener el mensaje y la clave desde los elementos HTML
    var mensaje = document.getElementById('mensaje').value;
    var clave = parseInt(document.getElementById('clave').value);

    // Encriptar el mensaje utilizando el cifrado César
    var textoEncriptado = cifrarCesar(mensaje, clave);

    // Redirigir a la segunda página con el mensaje encriptado como parámetro
    window.location.href = 'ed.html?textoEncriptado=' + encodeURIComponent(textoEncriptado);
});

// Manejar el evento 'click' del botón 'Desencriptar'
document.getElementById('desencriptar').addEventListener('click', function () {
    // Obtener el texto encriptado y la clave desde los elementos HTML
    var textoEncriptado = document.getElementById('textoEncriptado').value;
    var clave = parseInt(document.getElementById('clave').value);

    // Desencriptar el texto utilizando el cifrado César
    var textoDesencriptado = descifrarCesar(textoEncriptado, clave);

    // Mostrar el texto desencriptado en el elemento HTML
    document.getElementById('textoDesencriptado').value = textoDesencriptado;
});

// Manejar el evento 'click' del botón 'Regresar' para volver a la página anterior
document.getElementById('regresar').addEventListener('click', function() {
    window.history.back();
});

// Función para cifrar un mensaje utilizando el cifrado César
function cifrarCesar(texto, clave) {
    var textoCifrado = '';
    for (var i = 0; i < texto.length; i++) {
        var char = texto[i];
        var charCode = texto.charCodeAt(i);

        if (charCode >= 32 && charCode <= 126) {  // Rango de caracteres imprimibles en ASCII
            charCode = 32 + (charCode - 32 + clave) % 95;  // 95 es el número de caracteres imprimibles
            char = String.fromCharCode(charCode);
        }

        textoCifrado += char;
    }
    return textoCifrado;
}

// Función para descifrar un mensaje cifrado utilizando el cifrado César
function descifrarCesar(texto, clave) {
    // La función de descifrado simplemente llama a la función de cifrado con la clave inversa
    return cifrarCesar(texto, 95 - clave);  // 95 es el número de caracteres imprimibles
}
