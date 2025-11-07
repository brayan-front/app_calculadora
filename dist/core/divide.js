"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divide = divide;
// ...existing code...
const add_1 = require("./add");
const subtract_1 = require("./subtract");
function absViaBitwise(n) {
    // si n < 0 => return add(~n, 1) (two's complement), sino n
    return n < 0 ? (0, add_1.add)(~n, 1) : n;
}
function divide(a, b) {
    if (b === 0)
        throw new Error("Error: división por cero");
    if (a === 0)
        return 0;
    const negative = (a < 0) !== (b < 0);
    let remainder = absViaBitwise(a);
    const divisor = absViaBitwise(b);
    let quotient = 0;
    while (remainder >= divisor) {
        remainder = (0, subtract_1.subtract)(remainder, divisor);
        quotient = (0, add_1.add)(quotient, 1); // evitar ++
    }
    return negative ? (0, add_1.add)(~quotient, 1) : quotient; // ajustar signo sin usar -
}
