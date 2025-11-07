import express from "express";
import path from "path";
import { add, subtract, multiply, divide } from "../../core";
import { validateNumbers } from "../../utils/validate";

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

function toInt(x: any): number {
  return Math.trunc(Number(x));
}

app.post("/api/calc", (req, res) => {
  try {
    const { op, a: aRaw, b: bRaw } = req.body;
    const a = toInt(aRaw);
    const b = toInt(bRaw);
    validateNumbers(a, b);

    let result: number;
    switch (op) {
      case "add":
        result = add(a, b);
        break;
      case "subtract":
        result = subtract(a, b);
        break;
      case "multiply":
        result = multiply(a, b);
        break;
      case "divide":
        result = divide(a, b);
        break;
      default:
        return res.status(400).json({ error: "Operación inválida" });
    }

    return res.json({ result });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return res.status(400).json({ error: msg });
  }
});

const PORT = process.env.PORT ?? 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
