import { add } from "./add";

export function multiply(a: number, b: number): number {
  let result = 0;
  const negative = (a < 0) !== (b < 0);
  a = Math.abs(a);
  b = Math.abs(b);

  while (b > 0) {
    if (b & 1) result = add(result, a);
    a <<= 1;
    b >>= 1;
  }
  return negative ? add(~result, 1) : result;
}
