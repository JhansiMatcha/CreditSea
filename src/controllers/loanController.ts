import { Request, Response } from 'express';
import Loan from '../models/Loan';

export const applyLoan = async (req: Request, res: Response) => {
  try {
    const { userName, amount } = req.body;
    const newLoan = new Loan({ userName, amount });
    await newLoan.save();
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

export const getLoans = async (req: Request, res: Response) => {
  try {
    const loans = await Loan.find();
    res.json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

