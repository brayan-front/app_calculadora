import { subtract } from "../src/core/subtract";

test("Resta binaria básica", () => {
  expect(subtract(8, 3)).toBe(5);
});

test("Resta con negativos", () => {
  expect(subtract(-5, -3)).toBe(-2);
});
