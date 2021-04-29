function app() {
    
    let optionCifra = document.getElementById('cifraDeCesar')
    let optionBase64 = document.getElementById('base64')

    document.getElementById('selectEncode').addEventListener('change', function() {
        if(optionCifra.selected) {
            document.getElementById('deslocamento').style = 'display: inline'
        } else {
            document.getElementById('deslocamento').style = 'display: none'
        }
    })

    let codificar = document.getElementById('codificar');
    let decodificar = document.getElementById('decodificar');

    codificar.addEventListener('click', function() {
        let texto = document.getElementById('textoInicial').value
        let deslocamento = parseInt(document.getElementById('deslocamento').value)

        if(optionCifra.selected) doLowerCase(texto, deslocamento, 'codificar')
        if(optionBase64.selected) base64(texto, 'codificar')
    })

    decodificar.addEventListener('click', function() {
        let texto = document.getElementById('textoInicial').value
        let deslocamento = parseInt(document.getElementById('deslocamento').value)

        if(optionCifra.selected) doLowerCase(texto, deslocamento, 'decodificar')
        else if(optionBase64.selected) base64(texto, 'decodificar')
    })
    
}
app()