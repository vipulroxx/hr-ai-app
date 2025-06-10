import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import NavigationDrawer from './components/NavigationDrawer';
import AppBar from './components/AppBar';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import './App.css';
import ChatWindow from './components/ChatWindow';
import EmployeeDirectory from './components/EmployeeDirectory';
import LeaveRequestForm from './components/LeaveRequestForm';
import PolicyViewer from './components/PolicyViewer';
import PerformanceReview from './components/PerformanceReview';
import Recruitment from './components/Recruitment';
import Attendance from './components/Attendance';
import Payroll from './components/Payroll';
import Notifications from './components/Notifications';
import ProfileSettings from './components/Settings/ProfileSettings';
import ChallengeOverview from './components/ChallengeOverview'; // NEW
import PostingsPlanner from './components/Postings/PostingsPlanner';
import MovementAnalytics from './components/Analytics/MovementAnalytics';
import SkillMapping from './components/SkillMapping/SkillMapping';
import CorrespondenceGenerator from './components/Correspondence/CorrespondenceGenerator';
import FeedbackModule from './components/Feedback/FeedbackModule';

function App() {
  const [messages, setMessages] = useState([
    { from: 'ai', text: 'Hello! 👋 I\'m your HR Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSend = (msg) => {
    setMessages([...messages, { from: 'user', text: msg }]);
    // Simulate AI response
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: 'ai', text: "I'm here to help with HR queries! (This is a demo response)" }
      ]);
    }, 800);
  };

  return (
    <Router>
      <CssBaseline />
      {isAuthenticated ? (
        <Box>
          <NavigationDrawer />
          <Box component="main" sx={{ flexGrow: 1, ml: '260px', mt: 0, mb: 0, mr: 0, p: 0 }}>
            <AppBar
              title="Indian Air Force - Artificial Intelligence for Human Resource Management"
            />
            <Routes>
              <Route path="/" element={<ChallengeOverview />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/directory" element={<EmployeeDirectory />} />
              <Route path="/leave" element={<LeaveRequestForm />} />
              <Route path="/policies" element={<PolicyViewer />} />
              <Route path="/performance" element={<PerformanceReview />} />
              <Route path="/recruitment" element={<Recruitment />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/payroll" element={<Payroll />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/settings" element={<ProfileSettings />} />
              {/* New modules */}
              <Route path="/postings-planner" element={<PostingsPlanner />} />
              <Route path="/movement-analytics" element={<MovementAnalytics />} />
              <Route path="/skill-mapping" element={<SkillMapping />} />
              <Route path="/correspondence" element={<CorrespondenceGenerator />} />
              <Route path="/feedback" element={<FeedbackModule />} />
              {/* AI HR Assistant Chat only on /chat */}
              <Route
                path="/chat"
                element={
                  <>
                    <div style={{ margin: '32px 32px 32px 0', padding: 0 }}>
                      <header className="hr-header" style={{ display: 'flex', alignItems: 'center' }}>
                        <span role="img" aria-label="robot" className="hr-logo" style={{ fontSize: '2rem', marginRight: '10px' }}>🤖</span>
                        <h1>AI HR Assistant</h1>
                      </header>
                      <ChatWindow messages={messages} onSend={handleSend} />
                    </div>
                    <footer className="hr-footer" style={{ textAlign: 'center', padding: '10px', backgroundColor: '#f1f1f1' }}>
                      <small>© 2025 HR AI System. All rights reserved.</small>
                    </footer>
                  </>
                }
              />
              {/* Add other HR module routes here */}
            </Routes>
          </Box>
        </Box>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={() => setIsAuthenticated(true)} />} />
          <Route path="/signup" element={<Signup onSignup={() => setIsAuthenticated(true)} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;