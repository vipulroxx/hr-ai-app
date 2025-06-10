import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function JobPostings() {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Recruitment & Job Postings</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>Post jobs, view applications, status...</Paper>
    </Box>
  );
}