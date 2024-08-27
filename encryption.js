function criptografarTexto(texto) {
    let textoCriptografado = "";  // Variável para armazenar o texto criptografado

    for (let i = 0; i < texto.length; i++) {
        switch (texto[i]) {
            case 'a':
                textoCriptografado += "ai";
                break;
            case 'e':
                textoCriptografado += "enter";
                break;
            case 'i':
                textoCriptografado += "imes";
                break;
            case 'o':
                textoCriptografado += "ober";
                break;
            case 'u':
                textoCriptografado += "ufat";
                break;
            default:
                textoCriptografado += texto[i];
        }
    }
    return textoCriptografado;
}

function descriptografarTexto(texto) {
    let textoDescriptografado = "";
    let i = 0;
    
    while (i < texto.length) {
        if (texto.startsWith("ai", i)) {
            textoDescriptografado += "a";
            i += 2;
        } else if (texto.startsWith("enter", i)) {
            textoDescriptografado += "e";
            i += 5;
        } else if (texto.startsWith("imes", i)) {
            textoDescriptografado += "i";
            i += 4;
        } else if (texto.startsWith("ober", i)) {
            textoDescriptografado += "o";
            i += 4;
        } else if (texto.startsWith("ufat", i)) {
            textoDescriptografado += "u";
            i += 4;
        } else {
            textoDescriptografado += texto[i];
            i++;
        }
    }
    
    return textoDescriptografado;
}

function mostrarResultado(titulo, texto) {
    const elementoTituloSaida = document.getElementById("titulo__resultado");
    const elementoTextoSaida = document.getElementById("texto__resultado");
    elementoTituloSaida.textContent = titulo;
    elementoTextoSaida.textContent = texto;
}

// Adicionando eventos aos botões após o DOM estar carregado
document.addEventListener("DOMContentLoaded", function() {
    // Evento para o botão de criptografar
    document.getElementById("botao__criptografar").addEventListener("click", function() {
        const textoInserido = document.getElementById("campo__texto").value;
        const textoCriptografado = criptografarTexto(textoInserido);
        mostrarResultado("Mensagem Criptografada", textoCriptografado);
    });

    // Evento para o botão de descriptografar
    document.getElementById("botao__descriptografar").addEventListener("click", function() {
        const textoInserido = document.getElementById("campo__texto").value;
        const textoDescriptografado = descriptografarTexto(textoInserido);
        mostrarResultado("Mensagem Descriptografada", textoDescriptografado);
    });
});
