import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function LeaveRequest() {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Leave Management</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>Apply for leave, view status, approvals...</Paper>
    </Box>
  );
}