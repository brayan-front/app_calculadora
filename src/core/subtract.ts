import { add } from "./add";

export function subtract(a: number, b: number): number {
  return add(a, add(~b, 1));
}
