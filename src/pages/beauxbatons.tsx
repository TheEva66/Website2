import { FC } from 'react';

const Beauxbatons: FC = () => {
  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundImage: 'url(/images/french.jpg)',
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
      </div>
    </section>
  );
};

export default Beauxbatons;
