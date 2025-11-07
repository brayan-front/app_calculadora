import { divide } from "../src/core/divide";

test("División binaria básica", () => {
  expect(divide(10, 2)).toBe(5);
});

test("División con negativos", () => {
  expect(divide(-9, 3)).toBe(-3);
});

test("Error al dividir por cero", () => {
  expect(() => divide(5, 0)).toThrow("Error: división por cero");
});
