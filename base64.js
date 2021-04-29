function base64(palavra, comportamento) {
    var stringFinal = ''

    if(comportamento == 'codificar') {
        for(let i = 0; i < palavra.length; i++) {
            console.log(palavra[i])
            var letraCodificada = btoa(palavra[i])
            stringFinal += letraCodificada
        }
        // TERCEIRO PASSO: exibir o resultado
        document.getElementById("resultado").value = stringFinal;
    } else if(comportamento == 'decodificar') {
        for(let i = 0; i < palavra.length; i = i + 4) {
            var letraDecodificada = atob(`${palavra[i]}${palavra[i+1]}${palavra[i+2]}${palavra[i+3]}`)
            stringFinal += letraDecodificada
        }
        // TERCEIRO PASSO: exibir o resultado
        document.getElementById("resultado").value = stringFinal;
    }
}