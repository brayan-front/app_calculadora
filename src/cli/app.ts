// ...existing code...
import * as readline from "readline";
import { add, subtract, multiply, divide } from "../core";
import { validateNumbers } from "../utils/validate";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function toInt(raw: string): number {
  const n = Number(raw);
  // truncar hacia cero y convertir NaN a error más abajo con validateNumbers
  return Math.trunc(n);
}

rl.question("a: ", (aRaw) => {
  rl.question("b: ", (bRaw) => {
    try {
      const a = toInt(aRaw);
      const b = toInt(bRaw);
      validateNumbers(a, b);

      console.log("add:", add(a, b));
      console.log("subtract:", subtract(a, b));
      console.log("multiply:", multiply(a, b));
      console.log("divide:", divide(a, b));
    } catch (err: any) {
      console.error("Error:", err.message ?? err);
    } finally {
      rl.close();
    }
  });
});
// ...existing code...