import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableHead, TableRow, CircularProgress } from '@mui/material';

const mockRecommendations = [
  { officer: 'Sqn Ldr A. Kumar', current: 'Delhi', recommended: 'Bangalore', reason: 'Skill match, tenure complete' },
  { officer: 'Flt Lt S. Singh', current: 'Pune', recommended: 'Chandigarh', reason: 'Career progression' }
];

export default function PostingsPlanner() {
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleRunAI = () => {
    setLoading(true);
    setTimeout(() => {
      setRecommendations(mockRecommendations);
      setLoading(false);
    }, 1200);
  };

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      // In real app, parse file and use data
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          AI Postings Planner
        </Typography>
        <Typography paragraph>
          Plan and recommend optimal postings for officers based on organizational and personal requirements, qualifications, tenure, and career progression.
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Button variant="outlined" component="label" sx={{ mr: 2 }}>
            Upload Officer Data
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
          {fileName && <Typography variant="body2" display="inline">File: {fileName}</Typography>}
        </Box>
        <Button variant="contained" color="primary" onClick={handleRunAI} sx={{ mb: 2 }}>
          Run AI Posting Planner
        </Button>
        {loading && (
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
            <CircularProgress size={32} sx={{ mr: 2 }} />
            <Typography>Processing AI recommendations...</Typography>
          </Box>
        )}
        {recommendations.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>Recommendations</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Officer</TableCell>
                  <TableCell>Current Location</TableCell>
                  <TableCell>Recommended Location</TableCell>
                  <TableCell>Reason</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recommendations.map((rec, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{rec.officer}</TableCell>
                    <TableCell>{rec.current}</TableCell>
                    <TableCell>{rec.recommended}</TableCell>
                    <TableCell>{rec.reason}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
