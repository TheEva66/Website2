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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  } as React.CSSProperties,
  image: {
    width: '200px',
    height: '200px',
    marginBottom: '20px',
  },
  button: {
    position: 'relative',
    padding: '15px 30px',
    fontSize: '18px',
    fontFamily: "'Comic Sans MS', cursive, sans-serif",
    color: '#fff',
    backgroundColor: 'transparent',
    border: '2px solid #FF69B4',
    borderRadius: '8px',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'all 0.4s ease',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',

    // Define hover and pseudo-elements for a whimsical effect
    ':hover': {
      color: '#FF69B4',
      backgroundColor: '#fff',
      borderColor: '#FF69B4',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.3)',
    },

    ':before': {
      content: "''",
      position: 'absolute',
      top: '0',
      left: '-100%',
      width: '100%',
      height: '100%',
      backgroundColor: '#FF69B4',
      transition: 'all 0.4s ease',
      transform: 'skewX(-20deg)',
      zIndex: -1,
    },

    ':hover:before': {
      left: '100%',
    },

    ':after': {
      content: "''",
      position: 'absolute',
      bottom: '-10px',
      right: '-10px',
      width: '50px',
      height: '50px',
      backgroundColor: '#FF69B4',
      borderRadius: '50%',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      transition: 'all 0.3s ease-in-out',
    },

    ':hover:after': {
      bottom: '10px',
      right: '10px',
      width: '80px',
      height: '80px',
    },
  } as React.CSSProperties,
};

export default QRPage;
