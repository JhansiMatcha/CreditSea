"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoans = exports.applyLoan = void 0;
const Loan_1 = __importDefault(require("../models/Loan"));
const applyLoan = async (req, res) => {
    try {
        const { userName, amount } = req.body;
        const newLoan = new Loan_1.default({ userName, amount });
        await newLoan.save();
        res.status(201).json(newLoan);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
exports.applyLoan = applyLoan;
const getLoans = async (req, res) => {
    try {
        const loans = await Loan_1.default.find();
        res.json(loans);
    }
    catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
exports.getLoans = getLoans;
//# sourceMappingURL=loanController.js.map