"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const core_1 = require("../../core");
const validate_1 = require("../../utils/validate");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(__dirname));
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, "index.html"));
});
function toInt(x) {
    return Math.trunc(Number(x));
}
app.post("/api/calc", (req, res) => {
    try {
        const { op, a: aRaw, b: bRaw } = req.body;
        const a = toInt(aRaw);
        const b = toInt(bRaw);
        (0, validate_1.validateNumbers)(a, b);
        let result;
        switch (op) {
            case "add":
                result = (0, core_1.add)(a, b);
                break;
            case "subtract":
                result = (0, core_1.subtract)(a, b);
                break;
            case "multiply":
                result = (0, core_1.multiply)(a, b);
                break;
            case "divide":
                result = (0, core_1.divide)(a, b);
                break;
            default:
                return res.status(400).json({ error: "Operación inválida" });
        }
        return res.json({ result });
    }
    catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        return res.status(400).json({ error: msg });
    }
});
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));
