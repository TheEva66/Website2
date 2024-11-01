import { FC } from 'react';
import Link from 'next/link';

const Beauxbatons: FC = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#f0f0f0',
      textAlign: 'center',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    }}>
      
          <nav style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            padding: '1rem 0',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '12px',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '1000',
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
            <Link href="/qr">
              <a style={{
                color: '#ffffff',
                padding: '0.5rem 1rem',
                textDecoration: 'none',
                fontWeight: 'bold',
                textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.3s ease',
              }}>QR Code</a>
            </Link>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#5d9cec',
          textShadow: '0 0 10px #5d9cec, 0 0 20px #5d9cec',
        }}>
          Beauxbatons Academy of Magic
        </h2>
        <p style={{
          fontSize: '1.5rem',
          lineHeight: '1.8',
          maxWidth: '90%',
          margin: '0 auto',
          fontStyle: 'italic',
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
        }}>
          Beauxbatons Academy, renowned for elegance and precision in magic, sends forth champions who embody 
          the beauty and artistry of spellcraft. Each Beauxbatons champion carries the grace and skill of 
          this esteemed academy.
        </p>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginTop: '1.5rem',
          color: '#e0e0e0',
        }}>
          <strong>Potential Competitors:</strong> Fleur Delacour, a top student known for her poise and
          powerful charm spells, could be among the chosen champions. Beauxbatons’ competitors are celebrated
          for their grace, but don’t be deceived—beneath their charm lies a fierce competitive spirit.
        </p>
      </div>
      {/* Back to FY103 Button */}
      <div style={{ marginTop: '3rem' }}>
          <Link href="/fy103">
            <a style={{
              backgroundColor: '#ff4500',
              color: '#ffffff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 'bold',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc3700'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff4500'}>
              Back to FY103
            </a>
          </Link>
        </div>
    </section>
  );
};

export default Beauxbatons;
