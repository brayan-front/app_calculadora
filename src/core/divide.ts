// ...existing code...
import { add } from "./add";
import { subtract } from "./subtract";

function absViaBitwise(n: number): number {
  // si n < 0 => return add(~n, 1) (two's complement), sino n
  return n < 0 ? add(~n, 1) : n;
}

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error("Error: división por cero");
  if (a === 0) return 0;

  const negative = (a < 0) !== (b < 0);
  let remainder = absViaBitwise(a);
  const divisor = absViaBitwise(b);
  let quotient = 0;

  while (remainder >= divisor) {
    remainder = subtract(remainder, divisor);
    quotient = add(quotient, 1); // evitar ++
  }

  return negative ? add(~quotient, 1) : quotient; // ajustar signo sin usar -
}