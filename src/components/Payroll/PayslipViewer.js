import React from 'react';

const payslips = [
  { month: 'January 2024', amount: '₹80,000', status: 'Paid', download: '#' },
  { month: 'February 2024', amount: '₹80,000', status: 'Paid', download: '#' },
  { month: 'March 2024', amount: '₹80,000', status: 'Paid', download: '#' }
];

export default function PayslipViewer() {
  return (
    <div
      style={{
        margin: '32px 32px 32px 272px',
        padding: '24px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.06)'
      }}
    >
      <h2>Payslips & Payroll</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payslip</th>
          </tr>
        </thead>
        <tbody>
          {payslips.map((p, idx) => (
            <tr key={idx}>
              <td>{p.month}</td>
              <td>{p.amount}</td>
              <td>{p.status}</td>
              <td>
                <a href={p.download} download>
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}