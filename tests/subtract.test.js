"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const subtract_1 = require("../src/core/subtract");
test("Resta binaria básica", () => {
    expect((0, subtract_1.subtract)(8, 3)).toBe(5);
});
test("Resta con negativos", () => {
    expect((0, subtract_1.subtract)(-5, -3)).toBe(-2);
});
