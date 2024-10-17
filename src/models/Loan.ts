import mongoose, { Schema, Document } from 'mongoose';

interface ILoan extends Document {
    userId: string;
    amount: number;
    duration: number;
}

const LoanSchema: Schema = new Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    duration: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

const Loan = mongoose.model<ILoan>('Loan', LoanSchema);
export default Loan;

