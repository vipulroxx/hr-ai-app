import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Divider
} from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';

function PerformanceReview() {
  const [reviews, setReviews] = useState([]);
  const [employeeId, setEmployeeId] = useState('');
  const [reviewContent, setReviewContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!employeeId || !reviewContent) return;

    const newReview = {
      id: employeeId,
      content: reviewContent,
      date: new Date().toLocaleDateString(),
    };

    setReviews([...reviews, newReview]);
    setEmployeeId('');
    setReviewContent('');
  };

  return (
    <Box sx={{ p: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, display: 'flex', alignItems: 'center', color: '#1976d2' }}>
          <StarRateIcon sx={{ mr: 1 }} />
          Performance Review
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={4}>
              <TextField
                label="Employee ID"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                required
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Enter review content"
                value={reviewContent}
                onChange={(e) => setReviewContent(e.target.value)}
                required
                fullWidth
                multiline
                minRows={2}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ height: '100%', width: '100%' }}
              >
                Submit Review
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Submitted Reviews
      </Typography>
      <Divider sx={{ mb: 2 }} />
      {reviews.length === 0 ? (
        <Typography variant="body1" color="text.secondary">
          No reviews submitted yet.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {reviews.map((review, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card elevation={2} sx={{ borderRadius: 2, bgcolor: '#f3e5f5' }}>
                <CardContent>
                  <Typography variant="subtitle2" color="primary">
                    Employee ID: {review.id}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 1, mb: 1 }}>
                    {review.content}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Date: {review.date}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default PerformanceReview;