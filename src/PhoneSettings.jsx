import React from 'react';
import { Link } from 'react-router-dom';

function PhoneSettings() {
  return (
    <div style={styles.container}>
      <Link to="/" style={styles.exitButton}>
        &times;
      </Link>
      <h3 style={styles.subHeader}>Phone Settings</h3>
      <div style={styles.buttonContainer}>
        <Link to="/phone/actions">
          <button style={styles.subButton}>Add Number</button>
          <button style={styles.subButton}>Edit Number</button>
          <button style={styles.subButton}>Remove Number</button>
        </Link>
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
    position: 'relative',
  },
  exitButton: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    fontSize: '24px',
    color: '#ff0000',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  subHeader: {
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    padding: '10px 0',
  },
  subButton: {
    padding: '12px 24px',
    fontSize: '18px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#28a745',
    color: 'white',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    width: '100%',
    textAlign: 'left',
  },
};

export default PhoneSettings;
