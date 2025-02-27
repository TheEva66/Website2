import React from 'react';
import Link from 'next/link';

const QRPage: React.FC = () => {
  

  const handleCodeButtonClick = () => {
    window.open('https://drive.google.com/file/d/1on23OG7H2mWMcT9YcaeH5IUGcp1XZzHm/view?usp=sharing', '_blank');
  };

  return (
    <span>
    <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem 2rem',
            background: 'linear-gradient(135deg, rgba(3, 186, 15, 1), rgba(200, 3, 3, 1))',
            borderRadius: '12px',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '1000',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease-in-out',
            fontSize: '1.1rem',
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}>

      <Link href="/durmstrang">
        <a style={{
          color: '#ff4500',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
        }}>Durmstrang</a>
      </Link>
      <Link href="/hogwarts">
        <a style={{
          color: '#ffd700',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
        }}>Hogwarts</a>
      </Link>
      <Link href="/beauxbatons">
        <a style={{
          color: '#5d9cec',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
        }}>Beauxbatons</a>
      </Link>
      <Link href="/fy103">
        <a style={{
          color: '#00ff00',
          padding: '0.5rem 1rem',
          textDecoration: 'none',
          fontWeight: 'bold',
          textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
        }}>Home</a>
      </Link>
    </nav>
    <div style={styles.container}>
      <img
        src="/images/fy103-qr.png"
        alt="FY103 QR Code"
        style={styles.image}
      />
      <button style={styles.button} onClick={handleCodeButtonClick}>
        View Code on Google Drive
      </button>
    </div>
    </span>
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
    marginTop: '10px',
  } as React.CSSProperties,
};

export default QRPage;
