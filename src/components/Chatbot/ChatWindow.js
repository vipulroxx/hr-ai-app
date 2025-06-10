import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

export default function ChatWindow({ messages }) {
  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>AI HR Assistant</Typography>
      <Paper elevation={2} sx={{ p: 2, minHeight: 200 }}>
        {messages && messages.map((msg, idx) => (
          <div key={idx}><b>{msg.from}:</b> {msg.text}</div>
        ))}
      </Paper>
    </Box>
  );
}