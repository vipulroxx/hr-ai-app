import React, { useState } from 'react';
import { Box, Typography, Paper, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const mockSkills = [
  { officer: 'Sqn Ldr A. Kumar', skills: 'Pilot, Instructor', preferred: 'Bangalore' },
  { officer: 'Flt Lt S. Singh', skills: 'Engineer, Analyst', preferred: 'Chandigarh' }
];

const mockSkillRadar = [
  { skill: 'Pilot', 'A. Kumar': 5, 'S. Singh': 2 },
  { skill: 'Instructor', 'A. Kumar': 4, 'S. Singh': 1 },
  { skill: 'Engineer', 'A. Kumar': 1, 'S. Singh': 5 },
  { skill: 'Analyst', 'A. Kumar': 2, 'S. Singh': 4 }
];

export default function SkillMapping() {
  const [showTable, setShowTable] = useState(false);
  const [showRadar, setShowRadar] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleFileUpload = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
      // In real app, parse file and use data
    }
  };

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 4 },
        width: '100%',
        maxWidth: 900,
        mx: 'auto'
      }}
    >
      <Paper
        sx={{
          p: { xs: 1.5, sm: 2, md: 3 },
          borderRadius: 3,
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
          Skill Mapping
        </Typography>
        <Typography paragraph sx={{ fontSize: { xs: '0.95rem', sm: '1rem' } }}>
          Map officer skills, qualifications, and preferences to available roles and postings.
        </Typography>
        <Box sx={{ mb: 2, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' } }}>
          <Button variant="outlined" component="label" sx={{ mr: { sm: 2 }, mb: { xs: 1, sm: 0 }, width: { xs: '100%', sm: 'auto' } }}>
            Upload Skills Data
            <input type="file" hidden onChange={handleFileUpload} />
          </Button>
          {fileName && <Typography variant="body2" display="inline" sx={{ wordBreak: 'break-all' }}>File: {fileName}</Typography>}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setShowTable(true)}
          sx={{ width: { xs: '100%', sm: 'auto' }, mb: 1 }}
        >
          Show Skill Matrix
        </Button>
        {showTable && (
          <Box sx={{ mt: 3, overflowX: 'auto' }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>Officer Skill Matrix</Typography>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Officer</TableCell>
                  <TableCell>Skills</TableCell>
                  <TableCell>Preferred Location</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockSkills.map((row, idx) => (
                  <TableRow key={idx}>
                    <TableCell>{row.officer}</TableCell>
                    <TableCell>{row.skills}</TableCell>
                    <TableCell>{row.preferred}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        )}
				<br/>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShowRadar(true)}
					sx={{ width: { xs: '100%', sm: 'auto' , height: 'auto' }, mt: 2}}	
        >
          Show Skill Radar
        </Button>
        {showRadar && (
          <Box sx={{ mt: 3, width: '100%', height: { xs: 250, sm: 350 } }}>
            <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', sm: '1.2rem' } }}>Officer Skill Radar</Typography>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={mockSkillRadar}>
                <PolarGrid />
                <PolarAngleAxis dataKey="skill" />
                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                <Radar name="A. Kumar" dataKey="A. Kumar" stroke="#1976d2" fill="#1976d2" fillOpacity={0.6} />
                <Radar name="S. Singh" dataKey="S. Singh" stroke="#f44336" fill="#f44336" fillOpacity={0.4} />
                <Legend />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </Box>
        )}
      </Paper>
    </Box>
  );
}
