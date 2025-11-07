"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = multiply;
const add_1 = require("./add");
function multiply(a, b) {
    let result = 0;
    const negative = (a < 0) !== (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    while (b > 0) {
        if (b & 1)
            result = (0, add_1.add)(result, a);
        a <<= 1;
        b >>= 1;
    }
    return negative ? (0, add_1.add)(~result, 1) : result;
}
