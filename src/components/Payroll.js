import React from 'react';
import { Box, Typography, Paper, Button, List, ListItem, ListItemText } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';

const payrollHistory = [
  { month: 'May 2024', amount: '₹80,000', status: 'Paid' },
  { month: 'Apr 2024', amount: '₹80,000', status: 'Paid' },
  { month: 'Mar 2024', amount: '₹80,000', status: 'Paid' }
];

const Payroll = () => {
  const downloadPayslip = (month) => {
    alert(`Payslip for ${month} downloaded!`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        <PaidIcon sx={{ mr: 1, color: '#388e3c' }} />
        Payroll
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="body1">
          <strong>Last Payment:</strong> {payrollHistory[0].month} - {payrollHistory[0].amount}
        </Typography>
        <Typography variant="body2" color="success.main">
          Status: {payrollHistory[0].status}
        </Typography>
      </Paper>
      <Typography variant="h6" gutterBottom>
        Payroll History
      </Typography>
      <List>
        {payrollHistory.map((item, idx) => (
          <ListItem key={idx} sx={{ bgcolor: '#e3f2fd', mb: 1, borderRadius: 1 }}>
            <ListItemText
              primary={`${item.month} - ${item.amount}`}
              secondary={item.status}
            />
            <Button
              variant="outlined"
              color="primary"
              size="small"
              onClick={() => downloadPayslip(item.month)}
            >
              Download Payslip
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Payroll;
