function doLowerCase(theString, deslocamento, comportamento) {
    myAnswer = '';

    if (comportamento == 'codificar') {
        for (i = 0; i < theString.length; i++) {
            z = theString[i].charCodeAt()
            console.log(z)

            if (z >= 65 && z <= 90) {
                z = ((z - 65 + deslocamento) % 26) + 65
            } else if (z >= 97 && z <= 122) {
                z = ((z - 97 + deslocamento) % 26) + 97
            }
            myAnswer = myAnswer + String.fromCharCode(z);
        }

        document.getElementById("resultado").value = myAnswer;

    } else if(comportamento == 'decodificar') {
        for (i = 0; i < theString.length; i++) {
            z = theString[i].charCodeAt()

            if (z >= 65 && z <= 90) {
                z = ((z - 65 - deslocamento) % 26) + 65
            } else if (z >= 97 && z <= 122) {
                z = (((z - 97) - deslocamento) % 26) + 97
            }
            myAnswer = myAnswer + String.fromCharCode(z);
        }

        document.getElementById("resultado").value = myAnswer;
    }
}