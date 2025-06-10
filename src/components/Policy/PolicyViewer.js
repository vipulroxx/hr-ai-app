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

const policies = [
  {
    id: 1,
    title: 'Code of Conduct',
    description: "All employees are expected to adhere to the company's code of conduct, which outlines the behavior and professionalism required in the workplace.",
    content: 'Full code of conduct content goes here...',
    file: 'code-of-conduct.pdf'
  },
  {
    id: 2,
    title: 'Leave Policy',
    description: 'Employees are entitled to a certain number of paid leave days per year. This policy outlines the process for requesting leave and the types of leave available.',
    content: 'Full leave policy content goes here...',
    file: 'leave-policy.pdf'
  },
  {
    id: 3,
    title: 'Remote Work Policy',
    description: 'This policy provides guidelines for employees who wish to work remotely, including eligibility and expectations for communication and productivity.',
    content: 'Full remote work policy content goes here...',
    file: 'remote-work-policy.pdf'
  },
  {
    id: 4,
    title: 'Anti-Harassment Policy',
    description: 'The company is committed to providing a work environment free from harassment. This policy outlines reporting procedures and consequences.',
    content: 'Full anti-harassment policy content goes here...',
    file: 'anti-harassment-policy.pdf'
  }
];

export default function PolicyViewer() {
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
      {policies.map((policy) => (
        <Accordion key={policy.id} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${policy.id}-content`}
            id={`panel${policy.id}-header`}
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
            <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
              {policy.content}
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                startIcon={<DownloadIcon />}
                onClick={() => handleDownload(policy.file)}
              >
                Download
              </Button>
              <Button
                variant="outlined"
                color="success"
                size="small"
                startIcon={<CheckCircleIcon />}
                onClick={() => handleAcknowledge(policy.id)}
                disabled={acknowledged[policy.id]}
              >
                {acknowledged[policy.id] ? 'Acknowledged' : 'Acknowledge'}
              </Button>
              {acknowledged[policy.id] && (
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