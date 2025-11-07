"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Frontend JavaScript for the calculator
const display = document.getElementById('display');
const errorDiv = document.getElementById('error');
const keys = document.querySelector('.keys');
let currentInput = '';
let previousInput = '';
let operation = null;
let shouldResetDisplay = false;
function updateDisplay(value) {
    display.textContent = value;
}
function clearError() {
    errorDiv.textContent = '';
}
function showError(message) {
    errorDiv.textContent = message;
}
function handleNumber(num) {
    if (shouldResetDisplay) {
        currentInput = num;
        shouldResetDisplay = false;
    }
    else {
        currentInput += num;
    }
    updateDisplay(currentInput);
}
function handleOperation(op) {
    if (currentInput === '')
        return;
    if (previousInput !== '' && !shouldResetDisplay) {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    shouldResetDisplay = true;
}
function calculate() {
    return __awaiter(this, void 0, void 0, function* () {
        if (previousInput === '' || currentInput === '' || !operation)
            return;
        try {
            const response = yield fetch('/api/calc', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    op: operation,
                    a: parseInt(previousInput),
                    b: parseInt(currentInput),
                }),
            });
            const data = yield response.json();
            if (response.ok) {
                currentInput = data.result.toString();
                updateDisplay(currentInput);
                clearError();
            }
            else {
                showError(data.error);
            }
        }
        catch (err) {
            showError('Error de conexión');
        }
        operation = null;
        previousInput = '';
        shouldResetDisplay = true;
    });
}
function clear() {
    currentInput = '';
    previousInput = '';
    operation = null;
    shouldResetDisplay = false;
    updateDisplay('0');
    clearError();
}
keys.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.classList.contains('btn'))
        return;
    if (target.classList.contains('num')) {
        handleNumber(target.textContent);
    }
    else if (target.classList.contains('op')) {
        handleOperation(target.dataset.op);
    }
    else if (target.dataset.action === 'equals') {
        calculate();
    }
    else if (target.dataset.action === 'clear') {
        clear();
    }
});
