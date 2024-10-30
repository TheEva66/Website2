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
    </section>
  );
};

export default Durmstrang;
