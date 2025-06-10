import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Alert,
  Stack
} from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';

function LeaveRequestForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the submission to a backend service
    console.log({ startDate, endDate, reason });
    setSubmitted(true);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={4} sx={{ p: 4, maxWidth: 500, mx: 'auto', borderRadius: 3 }}>
        <Typography variant="h5" sx={{ mb: 3, display: 'flex', alignItems: 'center', color: '#1976d2' }}>
          <EventAvailableIcon sx={{ mr: 1 }} />
          Leave Request Form
        </Typography>
        {submitted ? (
          <Alert severity="success" sx={{ fontSize: '1.1rem' }}>
            Your leave request has been submitted successfully!
          </Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label="Start Date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
              />
              <TextField
                label="End Date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                InputLabelProps={{ shrink: true }}
                required
                fullWidth
              />
              <TextField
                label="Reason for Leave"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                required
                fullWidth
                multiline
                minRows={3}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{ borderRadius: 2, fontWeight: 600, letterSpacing: 1 }}
              >
                Submit Request
              </Button>
            </Stack>
          </form>
        )}
      </Paper>
    </Box>
  );
}

export default LeaveRequestForm;