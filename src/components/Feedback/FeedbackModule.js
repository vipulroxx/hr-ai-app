import React, { useState } from 'react';
import { Box, Typography, Paper, TextField, Button, Alert } from '@mui/material';

export default function FeedbackModule() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setFeedback('');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Feedback & Evaluation
        </Typography>
        <Typography paragraph>
          Collect feedback from officers and units regarding postings and HR processes.
        </Typography>
        {submitted && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Thank you for your feedback!
          </Alert>
        )}
        <TextField
          label="Your Feedback"
          multiline
          fullWidth
          minRows={3}
          sx={{ mb: 2 }}
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!feedback.trim()}
        >
          Submit Feedback
        </Button>
      </Paper>
    </Box>
  );
}
