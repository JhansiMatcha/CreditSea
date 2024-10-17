import express from 'express';
import Loan from '../models/Loan';

const router = express.Router();

// Endpoint to get total loans
router.get('/stats', async (req, res) => {
    try {
        const totalLoans = await Loan.countDocuments();
        res.status(200).json({ totalLoans });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching loan statistics', error });
    }
});

export default router;

