import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Switch,
  FormControlLabel,
  Divider,
  Stack,
  TextField,
  Button
} from '@mui/material';

export default function ProfileSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [showProfile, setShowProfile] = useState(true);
  const [autoLogout, setAutoLogout] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@email.com');
  const [password, setPassword] = useState('');

  const handleProfileUpdate = (e) => {
    e.preventDefault();
    // Simulate profile update
    alert('Profile updated!');
  };

  return (
    <Box p={3}>
      <Typography variant="h5" gutterBottom>
        Profile & Settings
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Profile Information
        </Typography>
        <form onSubmit={handleProfileUpdate}>
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              fullWidth
            />
            <TextField
              label="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              label="New Password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Update Profile
            </Button>
          </Stack>
        </form>
      </Paper>
      <Paper elevation={3} sx={{ p: 3, borderRadius: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Preferences
        </Typography>
        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="primary"
            />
          }
          label="Dark Mode"
        />
        <Divider sx={{ my: 1 }} />
        <FormControlLabel
          control={
            <Switch
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              color="primary"
            />
          }
          label="Email Notifications"
        />
        <Divider sx={{ my: 1 }} />
        <FormControlLabel
          control={
            <Switch
              checked={showProfile}
              onChange={() => setShowProfile(!showProfile)}
              color="primary"
            />
          }
          label="Show Profile Publicly"
        />
        <Divider sx={{ my: 1 }} />
        <FormControlLabel
          control={
            <Switch
              checked={autoLogout}
              onChange={() => setAutoLogout(!autoLogout)}
              color="primary"
            />
          }
          label="Enable Auto Logout"
        />
      </Paper>
    </Box>
  );
}