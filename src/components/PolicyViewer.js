import React, { useState } from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
  Stack
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import policies from '../data/policies';

function PolicyViewer() {
  const [acknowledged, setAcknowledged] = useState({});

  const handleAcknowledge = (id) => {
    setAcknowledged({ ...acknowledged, [id]: true });
  };

  const handleDownload = (file) => {
    alert(`Downloading ${file}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 700, mb: 3 }}>
        <DescriptionIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
        Company Policies
      </Typography>
      {policies.map((policy, idx) => (
        <Accordion key={idx} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${idx}-content`}
            id={`panel${idx}-header`}
            sx={{ bgcolor: '#f3e5f5', borderRadius: 2 }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {policy.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ bgcolor: '#fafafa', borderRadius: 2 }}>
            <Typography variant="body1" sx={{ mb: 2 }}>
              {policy.description}
            </Typography>
            {policy.content && (
              <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
                {policy.content}
              </Typography>
            )}
            <Stack direction="row" spacing={2}>
              {policy.file && (
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  startIcon={<DownloadIcon />}
                  onClick={() => handleDownload(policy.file)}
                >
                  Download
                </Button>
              )}
              <Button
                variant="outlined"
                color="success"
                size="small"
                startIcon={<CheckCircleIcon />}
                onClick={() => handleAcknowledge(policy.id || idx)}
                disabled={acknowledged[policy.id || idx]}
              >
                {acknowledged[policy.id || idx] ? 'Acknowledged' : 'Acknowledge'}
              </Button>
              {acknowledged[policy.id || idx] && (
                <Chip
                  label="Acknowledged"
                  color="success"
                  size="small"
                  icon={<CheckCircleIcon />}
                />
              )}
            </Stack>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}

export default PolicyViewer;