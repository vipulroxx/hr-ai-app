import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const ChallengeOverview = () => (
  <Box sx={{ p: 4 }}>
    <Paper sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Indian Air Force - Artificial Intelligence for Human Resource Management
      </Typography>
      <Typography variant="h6" gutterBottom>
        Problem Statement / Challenge
      </Typography>
      <Typography paragraph>
        To create an Artificial Intelligence based system to plan and execute movement of personnel on postings to various locations.
        The AI model should consider organisational/personal requirements and career progression, using data on officer’s qualifications, tenure, and professional growth to ensure organisational and personal contentment.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Challenge Definition
      </Typography>
      <Typography paragraph>
        Human Resource Management (HRM) in IAF involves attracting, developing, and retaining talent. One major challenge is to plan optimal transfers of officers across units, locations, and roles, based on qualifications, performance, and preferences. Existing methods are often manual, subjective, and inefficient, leading to high costs, low accuracy, and poor satisfaction.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Objectives
      </Typography>
      <ul>
        <li>Automate and streamline the posting planning process using AI techniques.</li>
        <li>Improve accuracy and fairness of posting decisions by considering multiple factors and constraints.</li>
        <li>Enhance outcomes and feedback by providing personalized, timely recommendations and supporting implementation and evaluation.</li>
      </ul>
      <Typography variant="h6" gutterBottom>
        Future Expectations
      </Typography>
      <Typography paragraph>
        The AI should handle routine posting planning tasks, correspondence generation, analysis, skill mapping, and personal choices, operating on dummy data during development.
      </Typography>
    </Paper>
  </Box>
);

export default ChallengeOverview;
