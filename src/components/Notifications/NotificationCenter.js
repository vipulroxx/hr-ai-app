import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const notifications = [
  { message: 'Your leave request for 5th April is approved.', date: '2024-04-02' },
  { message: 'New policy update: Remote Work Policy.', date: '2024-03-28' },
  { message: 'Payslip for March 2024 is now available.', date: '2024-03-25' }
];

export default function NotificationCenter() {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Notifications</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <ul>
          {notifications.map((n, idx) => (
            <li key={idx} style={{ marginBottom: '16px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
              <strong>{n.date}:</strong> {n.message}
            </li>
          ))}
        </ul>
      </Paper>
    </Box>
  );
}