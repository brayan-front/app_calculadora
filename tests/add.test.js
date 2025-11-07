"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const add_1 = require("../src/core/add");
test("Suma binaria básica", () => {
    expect((0, add_1.add)(5, 3)).toBe(8);
});
test("Suma con números negativos", () => {
    expect((0, add_1.add)(-4, 2)).toBe(-2);
});
