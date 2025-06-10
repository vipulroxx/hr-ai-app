import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function EmployeeDirectory() {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Employee Directory</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>Employee list, search, filter, profile links...</Paper>
    </Box>
  );
}