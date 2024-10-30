import React from 'react';

const QRPage: React.FC = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://www.evaakselrad.com/fy103';
  };

  return (
    <div style={styles.container}>
      <img
        src="/images/fy103-qr.png"
        alt="FY103 QR Code"
        style={styles.image}
      />
      <button style={styles.button} onClick={handleButtonClick}>
        Go to the Link
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',  // Remove 'as' type assertion
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  } as React.CSSProperties,  // Add type annotation here instead of using 'as' directly
  image: {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default QRPage;
