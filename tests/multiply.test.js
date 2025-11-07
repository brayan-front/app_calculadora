"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = require("../src/core/multiply");
test("Multiplicación binaria básica", () => {
    expect((0, multiply_1.multiply)(4, 3)).toBe(12);
});
test("Multiplicación con negativos", () => {
    expect((0, multiply_1.multiply)(-2, 3)).toBe(-6);
});
