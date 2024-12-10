import { useState } from 'react';
import './App.css';

function Settings() {
  const [activeTab, setActiveTab] = useState(null);

  const handleButtonClick = (tab) => {
    setActiveTab((prev) => (prev === tab ? null : tab)); // Toggle active tab
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Settings</h1>
      <div style={styles.section}>
        <h2 style={styles.subHeader}>Account</h2>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => handleButtonClick('phone')}
          >
            Phone Number
          </button>
          <button
            style={styles.button}
            onClick={() => handleButtonClick('email')}
          >
            Email
          </button>
          <button
            style={styles.button}
            onClick={() => handleButtonClick('communication')}
          >
            Communication
          </button>
          <button
            style={styles.button}
            onClick={() => handleButtonClick('notification')}
          >
            Notification
          </button>
        </div>

        {activeTab === 'phone' && (
          <div style={styles.subSection}>
            <h3 style={styles.subHeader}>Phone Number Settings</h3>
            <div style={styles.buttonContainer}>
              <button style={styles.subButton}>Add Number</button>
              <button style={styles.subButton}>Edit Number</button>
              <button style={styles.subButton}>Remove Number</button>
            </div>
          </div>
        )}

        {activeTab === 'email' && (
          <div style={styles.subSection}>
            <h3 style={styles.subHeader}>Email Settings</h3>
            <div style={styles.buttonContainer}>
              <button style={styles.subButton}>Add Email</button>
              <button style={styles.subButton}>Edit Email</button>
              <button style={styles.subButton}>Remove Email</button>
            </div>
          </div>
        )}

        {activeTab === 'communication' && (
          <div style={styles.subSection}>
            <h3 style={styles.subHeader}>Communication Settings</h3>
            <div style={styles.buttonContainer}>
              <button style={styles.subButton}>Chat Preferences</button>
              <button style={styles.subButton}>Call Preferences</button>
              <button style={styles.subButton}>Do Not Disturb</button>
            </div>
          </div>
        )}

        {activeTab === 'notification' && (
          <div style={styles.subSection}>
            <h3 style={styles.subHeader}>Notification Settings</h3>
            <div style={styles.buttonContainer}>
              <button style={styles.subButton}>General Communications</button>
              <button style={styles.subButton}>Connection Requests</button>
              <button style={styles.subButton}>Life-Coach Follow-Ups</button>
            </div>
          </div>
        )}
      </div>
    </div>
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
  buttonHovered: {
    backgroundColor: '#0056b3',
  },
  subSection: {
    marginTop: '20px',
    backgroundColor: '#fafafa',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
  },
  subButton: {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    textAlign: 'left',
  },
  subButtonHovered: {
    backgroundColor: '#218838',
  },
};

export default Settings;
