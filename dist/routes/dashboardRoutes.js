"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Loan_1 = __importDefault(require("../models/Loan"));
const router = express_1.default.Router();
router.get('/stats', async (req, res) => {
    try {
        const totalLoans = await Loan_1.default.countDocuments();
        res.status(200).json({ totalLoans });
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching loan statistics', error });
    }
});
exports.default = router;
//# sourceMappingURL=dashboardRoutes.js.map