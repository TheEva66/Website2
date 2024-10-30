import { FC } from 'react';

const Hogwarts: FC = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundImage: 'url(/images/hogwarts.jpg)',
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
          color: '#ffd700',
          textShadow: '0 0 10px #ffd700, 0 0 20px #ffd700',
        }}>
          Hogwarts School of Witchcraft and Wizardry
        </h2>
        <p style={{
          fontSize: '1.5rem',
          lineHeight: '1.8',
          maxWidth: '90%',
          margin: '0 auto',
          fontStyle: 'italic',
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
        }}>
          Hogwarts, home to many legendary witches and wizards, prepares its champions with skills in both 
          magic and courage. The champions who represent Hogwarts carry the legacy of its illustrious past.
        </p>
      </div>
    </section>
  );
};

export default Hogwarts;
