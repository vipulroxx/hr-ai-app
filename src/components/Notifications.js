import React, { useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const initialNotifications = [
  { id: 1, message: 'Your leave request was approved.', read: false },
  { id: 2, message: 'New HR policy uploaded.', read: false },
  { id: 3, message: 'Performance review scheduled.', read: false }
];

const Notifications = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Notifications
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={markAllAsRead} disabled={notifications.every(n => n.read)}>
          Mark all as read
        </Button>
        <Button variant="outlined" color="secondary" onClick={clearNotifications} sx={{ ml: 2 }} disabled={notifications.length === 0}>
          Clear all
        </Button>
      </Box>
      <List>
        {notifications.length === 0 && (
          <Typography variant="body1">No notifications.</Typography>
        )}
        {notifications.map(n => (
          <ListItem key={n.id} sx={{ bgcolor: n.read ? '#f5f5f5' : '#e3f2fd', mb: 1, borderRadius: 1 }}>
            <ListItemText
              primary={n.message}
              secondary={n.read ? 'Read' : 'Unread'}
              primaryTypographyProps={{ fontWeight: n.read ? 'normal' : 'bold' }}
            />
            <IconButton edge="end" aria-label="delete" onClick={() => deleteNotification(n.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Notifications;
