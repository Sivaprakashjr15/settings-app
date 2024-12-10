import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import PhoneSettings from './PhoneSettings.jsx';
import EmailSettings from './EmailSettings.jsx';
import CommunicationSettings from './CommunicationSettings.jsx';
import NotificationSettings from './NotificationSettings.jsx';

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <h1 style={styles.header}>Settings</h1>
        <div style={styles.section}>
          <h2 style={styles.subHeader}>Account</h2>
          <div style={styles.buttonContainer}>
            <Link to="/phone" target="_blank">
              <button style={styles.button}>Phone Number</button>
            </Link>
            <Link to="/email" target="_blank">
              <button style={styles.button}>Email</button>
            </Link>
            <Link to="/communication" target="_blank">
              <button style={styles.button}>Communication</button>
            </Link>
            <Link to="/notification" target="_blank">
              <button style={styles.button}>Notification</button>
            </Link>
          </div>
        </div>

        {/* Define Routes for each section */}
        <Routes>
          <Route path="/phone" element={<PhoneSettings />} />
          <Route path="/email" element={<EmailSettings />} />
          <Route path="/communication" element={<CommunicationSettings />} />
          <Route path="/notification" element={<NotificationSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  header: {
    fontSize: '36px',
    marginBottom: '20px',
    color: '#333',
  },
  section: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    width: '80%',
    margin: '0 auto',
  },
  subHeader: {
    fontSize: '20px',
    marginBottom: '15px',
    color: '#555',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px 0',
  },
  button: {
    padding: '12px 24px',
    fontSize: '18px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    textAlign: 'left',
  },
};

export default App;
