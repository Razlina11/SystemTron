function appendToResult(value) {
    document.querySelector('.result').value += value;
}

function calculateResult() {
    const result = eval(document.querySelector('.result').value);
    document.querySelector('.result').value = result;
}

function clearResult() {
    document.querySelector('.result').value = '';
}
