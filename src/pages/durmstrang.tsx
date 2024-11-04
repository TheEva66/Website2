import { FC } from 'react';
import Link from 'next/link';

const Durmstrang: FC = () => {
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
            </nav>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#ff4500',
          textShadow: '0 0 10px #ff4500, 0 0 20px #ff4500',
        }}>
          Durmstrang Institute
        </h2>
        <p style={{
          fontSize: '1.5rem',
          lineHeight: '1.8',
          maxWidth: '90%',
          margin: '0 auto',
          fontStyle: 'italic',
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
        }}>
          Known for its intense focus on magical combat, Durmstrang Institute is respected for training wizards
          of unmatched resilience and skill. Champions from Durmstrang are renowned for their strength and fearlessness.
        </p>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginTop: '1.5rem',
          color: '#e0e0e0',
        }}>
          <strong>Potential Competitors:</strong> Rumor has it that Viktor Krum, Durmstrang’s Quidditch star, could be
          among the contestants. Known for his remarkable agility and focus, Krum would be a formidable competitor. Durmstrang’s
          champions are trained in both magical offense and defense, making them powerful allies and fearsome opponents.
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

export default Durmstrang;
