import React, { useState } from 'react';
import { Box, Typography, Paper, Button } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const mockAnalytics = [
  { location: 'Delhi', incoming: 3, outgoing: 2, satisfaction: 80 },
  { location: 'Bangalore', incoming: 1, outgoing: 4, satisfaction: 60 },
  { location: 'Chandigarh', incoming: 2, outgoing: 1, satisfaction: 90 }
];

const satisfactionPie = [
  { name: 'High', value: 1 },
  { name: 'Medium', value: 1 },
  { name: 'Low', value: 1 }
];

const COLORS = ['#4caf50', '#ff9800', '#f44336'];

export default function MovementAnalytics() {
  const [show, setShow] = useState(false);

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          Movement Analytics
        </Typography>
        <Typography paragraph>
          Analyze the impact of specific postings and transfers on organizational and individual outcomes.
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setShow(true)}>
          Show Analytics
        </Button>
        {show && (
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>Posting Movement Summary (Bar Chart)</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockAnalytics}>
                <XAxis dataKey="location" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="incoming" fill="#1976d2" name="Incoming" />
                <Bar dataKey="outgoing" fill="#f44336" name="Outgoing" />
              </BarChart>
            </ResponsiveContainer>
            <Typography variant="h6" sx={{ mt: 4 }} gutterBottom>
              Satisfaction Distribution (Pie Chart)
            </Typography>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={satisfactionPie}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {satisfactionPie.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
