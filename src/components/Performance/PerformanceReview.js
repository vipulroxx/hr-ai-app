import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function PerformanceReview() {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Performance Reviews</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>Submit/view reviews, analytics, feedback...</Paper>
    </Box>
  );
}