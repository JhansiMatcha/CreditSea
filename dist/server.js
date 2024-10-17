"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const loanRoutes_1 = __importDefault(require("./routes/loanRoutes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5001;
app.use(express_1.default.json());
(0, database_1.default)();
app.use('/api/loans', loanRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map