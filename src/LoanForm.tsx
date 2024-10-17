// src/LoanForm.tsx
import React, { useState } from 'react';

const LoanForm: React.FC = () => {
    const [amount, setAmount] = useState(0);
    const [duration, setDuration] = useState(0);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = { amount, duration };

        try {
            const response = await fetch('/api/loans/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit application');
            }

            const result = await response.json();
            alert(result.message); // Show success message
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Loan Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    required
                />
            </div>
            <div>
                <label>Duration (months):</label>
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    required
                />
            </div>
            <button type="submit">Apply for Loan</button>
        </form>
    );
};

export default LoanForm;

