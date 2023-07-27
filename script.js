document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';

    function updateDisplay() {
        display.value = currentInput;
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
    }

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const value = button.textContent;
            if (value === 'AC') {
                currentInput = '';
            } else if (value === 'DE') {
                currentInput = currentInput.slice(0, -1);
            } else if (value === '=') {
                calculate();
            } else {
                currentInput += value;
            }

            updateDisplay();
        });
    });
});
