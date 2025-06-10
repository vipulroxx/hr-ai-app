import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea, Avatar, Stack, Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleIcon from '@mui/icons-material/People';
import PolicyIcon from '@mui/icons-material/Policy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PaidIcon from '@mui/icons-material/Paid';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const metrics = [
  {
    title: 'Leave Requests',
    description: 'Apply for leave, view status, and history.',
    icon: <EventAvailableIcon fontSize="large" sx={{ color: '#1976d2' }} />,
    color: '#e3f2fd',
    route: '/leave',
    stat: '2 Pending'
  },
  {
    title: 'Employee Directory',
    description: 'Browse and search all employees.',
    icon: <PeopleIcon fontSize="large" sx={{ color: '#388e3c' }} />,
    color: '#e8f5e9',
    route: '/directory',
    stat: '54 Employees'
  },
  {
    title: 'Policies',
    description: 'View and acknowledge company policies.',
    icon: <PolicyIcon fontSize="large" sx={{ color: '#fbc02d' }} />,
    color: '#fffde7',
    route: '/policies',
    stat: '4 Policies'
  },
  {
    title: 'Performance Reviews',
    description: 'Submit and view performance reviews.',
    icon: <AssessmentIcon fontSize="large" sx={{ color: '#8e24aa' }} />,
    color: '#f3e5f5',
    route: '/performance',
    stat: '1 Due'
  },
  {
    title: 'Recruitment',
    description: 'Manage job postings and applicants.',
    icon: <WorkIcon fontSize="large" sx={{ color: '#0288d1' }} />,
    color: '#e1f5fe',
    route: '/recruitment',
    stat: '3 Openings'
  },
  {
    title: 'Attendance',
    description: 'Mark and view attendance records.',
    icon: <AccessTimeIcon fontSize="large" sx={{ color: '#ff7043' }} />,
    color: '#fff3e0',
    route: '/attendance',
    stat: 'Present Today'
  },
  {
    title: 'Payroll',
    description: 'View salary and download payslips.',
    icon: <PaidIcon fontSize="large" sx={{ color: '#43a047' }} />,
    color: '#e8f5e9',
    route: '/payroll',
    stat: '₹80,000 Last'
  },
  {
    title: 'Notifications',
    description: 'See latest HR notifications.',
    icon: <NotificationsActiveIcon fontSize="large" sx={{ color: '#d32f2f' }} />,
    color: '#ffebee',
    route: '/notifications',
    stat: '5 New'
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: { xs: 1, sm: 2, md: 4 } }}>
      <Typography variant="h4" sx={{ fontWeight: 700, color: '#1976d2', mb: 3 }}>
        Welcome to the HR Dashboard
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, sm: 3 }}
        sx={{
          justifyContent: 'center',
          alignItems: 'stretch'
        }}
      >
        {metrics.map((metric, idx) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            xl={3}
            key={idx}
            sx={{
              display: 'flex',
              alignItems: 'stretch',
              justifyContent: 'center'
            }}
          >
            <Card
              elevation={6}
              sx={{
                borderRadius: 4,
                bgcolor: metric.color,
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'scale(1.04)',
                  boxShadow: 10,
                  cursor: 'pointer'
                },
                width: '100%',
                maxWidth: 300,
                minWidth: 200,
                aspectRatio: '1 / 1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'stretch',
                alignItems: 'stretch',
                height: { xs: 200, sm: 220, md: 240, lg: 260 },
                minHeight: { xs: 200, sm: 220, md: 240, lg: 260 }
              }}
            >
              <CardActionArea
                onClick={() => navigate(metric.route)}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'stretch',
                  justifyContent: 'stretch'
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%',
                    p: { xs: 2, sm: 3 }
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2, minHeight: 56 }}
                  >
                    <Avatar
                      sx={{
                        bgcolor: '#fff',
                        width: 56,
                        height: 56,
                        boxShadow: 2,
                        flexShrink: 0
                      }}
                    >
                      {metric.icon}
                    </Avatar>
                    <Box sx={{ minWidth: 0 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '1.05rem', sm: '1.15rem', md: '1.2rem' },
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {metric.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          fontSize: { xs: '0.92rem', sm: '1rem' },
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis'
                        }}
                      >
                        {metric.description}
                      </Typography>
                    </Box>
                  </Stack>
                  <Box sx={{ mt: 2 }}>
                    {metric.stat && (
                      <Chip
                        label={metric.stat}
                        color="primary"
                        variant="outlined"
                        sx={{
                          fontWeight: 600,
                          fontSize: { xs: '0.95rem', sm: '1rem' },
                          bgcolor: '#fff',
                          px: 2
                        }}
                      />
                    )}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 5, textAlign: 'center', color: '#888' }}>
        <Typography variant="body2">
          © 2025 HR AI System. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}