import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Chip, Paper } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Attendance = () => {
  const [status, setStatus] = useState('Absent');
  const [log, setLog] = useState([
    { date: '2024-06-01', status: 'Present' },
    { date: '2024-05-31', status: 'Present' },
    { date: '2024-05-30', status: 'Absent' }
  ]);

  const markPresent = () => {
    setStatus('Present');
    setLog([{ date: new Date().toISOString().slice(0, 10), status: 'Present' }, ...log]);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        <AccessTimeIcon sx={{ mr: 1, color: '#1976d2' }} />
        Attendance
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="body1">
          Today's Status: 
          <Chip
            label={status}
            color={status === 'Present' ? 'success' : 'default'}
            icon={status === 'Present' ? <CheckCircleIcon /> : <AccessTimeIcon />}
            sx={{ ml: 2 }}
          />
        </Typography>
        <Button
          variant="contained"
          color="primary"
          disabled={status === 'Present'}
          onClick={markPresent}
        >
          Mark Present
        </Button>
      </Paper>
      <Typography variant="h6" gutterBottom>
        Attendance Log
      </Typography>
      <List>
        {log.map((entry, idx) => (
          <ListItem key={idx} sx={{ bgcolor: entry.status === 'Present' ? '#e8f5e9' : '#fffde7', mb: 1, borderRadius: 1 }}>
            <ListItemText
              primary={entry.date}
              secondary={entry.status}
              secondaryTypographyProps={{ color: entry.status === 'Present' ? 'green' : 'orange' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Attendance;
