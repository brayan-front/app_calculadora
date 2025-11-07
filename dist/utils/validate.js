"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateNumbers = validateNumbers;
function validateNumbers(a, b) {
    if (typeof a !== "number" || isNaN(a) || (b !== undefined && (typeof b !== "number" || isNaN(b)))) {
        throw new Error("Entradas inválidas: deben ser números.");
    }
    // La implementación usa bitwise: exigir enteros
    if (!Number.isInteger(a) || (b !== undefined && !Number.isInteger(b))) {
        throw new Error("Entradas inválidas: deben ser enteros.");
    }
    return true;
}
