"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Loan_1 = __importDefault(require("../models/Loan"));
const router = express_1.default.Router();
router.post('/apply', async (req, res) => {
    try {
        const { userId, amount, duration } = req.body;
        const newLoan = new Loan_1.default({ userId, amount, duration });
        await newLoan.save();
        res.status(201).json({ message: 'Loan application submitted successfully!' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error submitting loan application', error });
    }
});
exports.default = router;
//# sourceMappingURL=loanRoutes.js.map