"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const divide_1 = require("../src/core/divide");
test("División binaria básica", () => {
    expect((0, divide_1.divide)(10, 2)).toBe(5);
});
test("División con negativos", () => {
    expect((0, divide_1.divide)(-9, 3)).toBe(-3);
});
test("Error al dividir por cero", () => {
    expect(() => (0, divide_1.divide)(5, 0)).toThrow("Error: división por cero");
});
