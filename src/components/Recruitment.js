import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, TextField, Paper, Chip } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const initialJobs = [
  { id: 1, title: 'Frontend Developer', applicants: 5, status: 'Open' },
  { id: 2, title: 'HR Manager', applicants: 2, status: 'Closed' }
];

const Recruitment = () => {
  const [jobs, setJobs] = useState(initialJobs);
  const [newJob, setNewJob] = useState('');

  const addJob = () => {
    if (newJob.trim()) {
      setJobs([{ id: Date.now(), title: newJob, applicants: 0, status: 'Open' }, ...jobs]);
      setNewJob('');
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        <WorkIcon sx={{ mr: 1, color: '#1976d2' }} />
        Recruitment
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 3, display: 'flex', gap: 2 }}>
        <TextField
          label="New Job Title"
          value={newJob}
          onChange={e => setNewJob(e.target.value)}
          variant="outlined"
          size="small"
          sx={{ flex: 1 }}
        />
        <Button variant="contained" color="primary" onClick={addJob}>
          Add Job
        </Button>
      </Paper>
      <Typography variant="h6" gutterBottom>
        Job Openings
      </Typography>
      <List>
        {jobs.map(job => (
          <ListItem key={job.id} sx={{ bgcolor: '#f3e5f5', mb: 1, borderRadius: 1 }}>
            <ListItemText
              primary={job.title}
              secondary={`Applicants: ${job.applicants}`}
            />
            <Chip label={job.status} color={job.status === 'Open' ? 'success' : 'default'} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Recruitment;
