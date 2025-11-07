"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = add;
function add(a, b) {
    while (b !== 0) {
        const carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
