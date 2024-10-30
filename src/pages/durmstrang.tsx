import { FC } from 'react';

const Durmstrang: FC = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundImage: 'url(/images/durmstrang.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#f0f0f0',
      textAlign: 'center',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    }}>
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
          of unmatched resilience and skill. Champions from Durmstrang are said to be among the bravest and most
          fearless of all.
        </p>
      </div>
    </section>
  );
};

export default Durmstrang;
