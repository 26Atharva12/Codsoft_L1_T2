function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        let display = document.getElementById('display');
        let result = eval(display.value);
        addToHistory(display.value + ' = ' + result);
        display.value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function calculateSquareRoot() {
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = 'Error';
        } else {
            let result = Math.sqrt(value);
            addToHistory('√' + display.value + ' = ' + result);
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateInverse() {
    let display = document.getElementById('display');
    try {
        let value = parseFloat(display.value);
        if (isNaN(value)) {
            display.value = 'Error';
        } else {
            let result = 1 / value;
            addToHistory('1/' + display.value + ' = ' + result);
            display.value = result;
        }
    } catch (error) {
        display.value = 'Error';
    }
}

function addToHistory(entry) {
    let historyList = document.getElementById('historyList');
    let listItem = document.createElement('li');
    listItem.textContent = entry;
    historyList.appendChild(listItem);
}

function toggleHistory() {
    let history = document.getElementById('history');
    if (history.style.display === 'none' || history.style.display === '') {
        history.style.display = 'block';
    } else {
        history.style.display = 'none';
    }
}

function clearHistory() {
    let historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
}

function deleteLastChar() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Keyboard support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/\d/.test(key)) {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calculateResult();
    } else if (key === 'c' || key === 'C') {
        clearDisplay();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === '.') {
        appendToDisplay('.');
    } else if (key === 'Delete') {
        deleteLastChar();
    }
});
