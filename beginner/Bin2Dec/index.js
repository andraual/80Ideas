function convert() {

    const binary = document.getElementById('inNumber').value;
    if (binary === '') return alert('Por favor, entre com um numero binário!');
    binary.split('').map((char) => {
        if (char !== '0' && char !== '1') return alert('Por favor, entre com um numero binário valido');
    });
    const decimal = parseInt(binary, 2);
    document.getElementById('result').innerText = decimal;
    // window.stop()
    return true;
}


