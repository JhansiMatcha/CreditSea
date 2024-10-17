import express from 'express';
import Loan from '../models/Loan'; // Make sure to create this model

const router = express.Router();

// Route to handle loan application submission
router.post('/apply', async (req, res) => {
    try {
        const { userId, amount, duration } = req.body; // Get data from request
        const newLoan = new Loan({ userId, amount, duration }); // Create a new loan document
        await newLoan.save(); // Save to database
        res.status(201).json({ message: 'Loan application submitted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting loan application', error });
    }
});

export default router;

