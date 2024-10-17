import express from 'express';
import connectDB from './config/database';
import loanRoutes from './routes/loanRoutes'; // Import routes

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json()); // Parse JSON bodies

connectDB(); // Connect to MongoDB

app.use('/api/loans', loanRoutes); // Use the loan routes

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

