import React, { useState } from 'react';
import { Box, Typography, Paper, Button, TextField } from '@mui/material';

export default function CorrespondenceGenerator() {
  const [officer, setOfficer] = useState('');
  const [posting, setPosting] = useState('');
  const [letter, setLetter] = useState('');

  const handleGenerate = () => {
    setLetter(
      `To: ${officer}\n\nYou are hereby posted to ${posting} as per organizational requirements.\n\nRegards,\nHR`
    );
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Correspondence Generator
        </Typography>
        <Typography paragraph>
          Automatically generate official correspondence for postings, transfers, and HR actions.
        </Typography>
        <TextField
          label="Officer Name"
          value={officer}
          onChange={e => setOfficer(e.target.value)}
          sx={{ mb: 2 }}
          fullWidth
        />
        <TextField
          label="Posting Location"
          value={posting}
          onChange={e => setPosting(e.target.value)}
          sx={{ mb: 2 }}
          fullWidth
        />
        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Generate Letter
        </Button>
        {letter && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle1" gutterBottom>Generated Letter:</Typography>
            <Paper sx={{ p: 2, whiteSpace: 'pre-line', bgcolor: '#f5f5f5' }}>{letter}</Paper>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
