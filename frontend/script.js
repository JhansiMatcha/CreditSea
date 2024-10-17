document.getElementById('loanForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch('http://localhost:5000/api/loans/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userName, amount })
    });

    const data = await response.json();
    console.log(data);  // Display success message
    fetchLoans();       // Refresh loan list after submission
});

async function fetchLoans() {
    const response = await fetch('http://localhost:5000/api/loans/loans');
    const loans = await response.json();

    const loanList = document.getElementById('loanList');
    loanList.innerHTML = ''; // Clear previous entries
    loans.forEach(loan => {
        const loanItem = document.createElement('div');
        loanItem.textContent = `Name: ${loan.userName}, Amount: ${loan.amount}, Status: ${loan.status}`;
        loanList.appendChild(loanItem);
    });

    const totalLoans = document.getElementById('totalLoans');
    totalLoans.textContent = `Total Loans: ${loans.length}`;
}

fetchLoans(); // Fetch loans when the page loads

