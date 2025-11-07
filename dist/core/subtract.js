"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtract = subtract;
const add_1 = require("./add");
function subtract(a, b) {
    return (0, add_1.add)(a, (0, add_1.add)(~b, 1));
}
