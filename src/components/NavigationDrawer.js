import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Typography,
  Box
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import EventNoteIcon from '@mui/icons-material/EventNote';
import PolicyIcon from '@mui/icons-material/Policy';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WorkIcon from '@mui/icons-material/Work';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import TimelineIcon from '@mui/icons-material/Timeline';
import MapIcon from '@mui/icons-material/Map';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { Link, useLocation } from 'react-router-dom';

const mainNav = [
  { text: 'Challenge Overview', icon: <DashboardIcon />, path: '/' },
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
  { text: 'Postings Planner', icon: <AssignmentTurnedInIcon />, path: '/postings-planner' }, // NEW
  { text: 'Movement Analytics', icon: <TimelineIcon />, path: '/movement-analytics' }, // NEW
  { text: 'Skill Mapping', icon: <MapIcon />, path: '/skill-mapping' }, // NEW
  { text: 'Correspondence', icon: <MailOutlineIcon />, path: '/correspondence' }, // NEW
  { text: 'Feedback', icon: <FeedbackIcon />, path: '/feedback' }, // NEW
  { text: 'Employee Directory', icon: <PeopleIcon />, path: '/directory' },
  { text: 'Leave Management', icon: <EventNoteIcon />, path: '/leave' },
  { text: 'Policies', icon: <PolicyIcon />, path: '/policies' },
  { text: 'Performance', icon: <AssessmentIcon />, path: '/performance' },
  { text: 'Payroll', icon: <AttachMoneyIcon />, path: '/payroll' },
  { text: 'Attendance', icon: <AccessTimeIcon />, path: '/attendance' },
  { text: 'Recruitment', icon: <WorkIcon />, path: '/recruitment' },
];

const supportNav = [
  { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  { text: 'AI Chat', icon: <ChatIcon />, path: '/chat' },
  { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
];

const drawerWidth = 260;

export default function NavigationDrawer() {
  const location = useLocation();

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
          color: '#fff'
        }
      }}
    >
      <Toolbar>
        <Box display="flex" alignItems="center" width="100%">
          <img src="/logo192.png" alt="HR AI" style={{ width: 36, marginRight: 12 }} />
          <Typography variant="h6" noWrap sx={{ fontWeight: 700 }}>
            HR AI System
          </Typography>
        </Box>
      </Toolbar>
      <Divider sx={{ background: 'rgba(255,255,255,0.2)' }} />
      <List>
        {mainNav.map(item => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: '#fff',
              '&.Mui-selected': {
                background: 'rgba(255,255,255,0.12)',
                fontWeight: 600
              },
              '&:hover': {
                background: 'rgba(255,255,255,0.08)'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider sx={{ background: 'rgba(255,255,255,0.2)' }} />
      <List>
        {supportNav.map(item => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              color: '#fff',
              '&.Mui-selected': {
                background: 'rgba(255,255,255,0.12)',
                fontWeight: 600
              },
              '&:hover': {
                background: 'rgba(255,255,255,0.08)'
              }
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}