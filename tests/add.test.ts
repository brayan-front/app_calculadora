import { add } from "../src/core/add";

test("Suma binaria básica", () => {
  expect(add(5, 3)).toBe(8);
});

test("Suma con números negativos", () => {
  expect(add(-4, 2)).toBe(-2);
});
