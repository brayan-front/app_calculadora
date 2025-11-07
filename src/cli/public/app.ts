// Frontend JavaScript for the calculator
const display = document.getElementById('display') as HTMLDivElement;
const errorDiv = document.getElementById('error') as HTMLDivElement;
const keys = document.querySelector('.keys') as HTMLDivElement;

let currentInput = '';
let previousInput = '';
let operation: string | null = null;
let shouldResetDisplay = false;

function updateDisplay(value: string) {
  display.textContent = value;
}

function clearError() {
  errorDiv.textContent = '';
}

function showError(message: string) {
  errorDiv.textContent = message;
}

function handleNumber(num: string) {
  if (shouldResetDisplay) {
    currentInput = num;
    shouldResetDisplay = false;
  } else {
    currentInput += num;
  }
  updateDisplay(currentInput);
}

function handleOperation(op: string) {
  if (currentInput === '') return;
  if (previousInput !== '' && !shouldResetDisplay) {
    calculate();
  }
  operation = op;
  previousInput = currentInput;
  shouldResetDisplay = true;
}

async function calculate() {
  if (previousInput === '' || currentInput === '' || !operation) return;

  try {
    const response = await fetch('/api/calc', {
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

    const data = await response.json();
    if (response.ok) {
      currentInput = data.result.toString();
      updateDisplay(currentInput);
      clearError();
    } else {
      showError(data.error);
    }
  } catch (err) {
    showError('Error de conexión');
  }

  operation = null;
  previousInput = '';
  shouldResetDisplay = true;
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
  const target = e.target as HTMLElement;
  if (!target.classList.contains('btn')) return;

  if (target.classList.contains('num')) {
    handleNumber(target.textContent!);
  } else if (target.classList.contains('op')) {
    handleOperation(target.dataset.op!);
  } else if (target.dataset.action === 'equals') {
    calculate();
  } else if (target.dataset.action === 'clear') {
    clear();
  }
});
