import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const attendanceData = [
  { date: '2024-04-01', status: 'Present' },
  { date: '2024-04-02', status: 'Present' },
  { date: '2024-04-03', status: 'Absent' },
  { date: '2024-04-04', status: 'Present' }
];

export default function AttendanceTracker() {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>Attendance Tracker</Typography>
      <Paper elevation={2} sx={{ p: 2 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.date}</td>
                <td>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </Box>
  );
}