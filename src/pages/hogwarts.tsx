import { FC } from 'react';

const Hogwarts: FC = () => {
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
          magic and courage. This year, Hogwarts is honored to host the prestigious Triwizard Tournament.
        </p>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginTop: '1.5rem',
          color: '#e0e0e0',
        }}>
          Hosting this event is a profound privilege and responsibility. The entire castle is abuzz with excitement, 
          preparing to welcome champions from all over Europe. From the enchanted decorations in the Great Hall to the 
          enhanced security measures around the castle, Hogwarts is making history as the official host of the Triwizard Tournament.
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

export default Hogwarts;
