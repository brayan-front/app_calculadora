import { multiply } from "../src/core/multiply";

test("Multiplicación binaria básica", () => {
  expect(multiply(4, 3)).toBe(12);
});

test("Multiplicación con negativos", () => {
  expect(multiply(-2, 3)).toBe(-6);
});
