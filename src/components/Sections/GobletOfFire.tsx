import { FC, memo, useState } from 'react';
import ContactForm from './gob';

const GobletOfFire: FC = memo(() => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section style={{
      padding: '4rem 2rem',
      backgroundImage: 'url(/images/goblet.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#f0f0f0',
      textAlign: 'center',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header Title */}
        <h2 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: '#ffd700',
          textShadow: '0 0 10px #ffd700, 0 0 20px #ffd700',
        }}>
          The Goblet of Fire
        </h2>
        
        {/* Brief Intro */}
        <p style={{
          fontSize: '1.5rem',
          lineHeight: '1.8',
          maxWidth: '90%',
          margin: '0 auto',
          fontStyle: 'italic',
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
        }}>
          Welcome, brave witch or wizard, to the official page of the Goblet of Fire. This ancient magical artifact 
          holds the power to choose the champions for the Triwizard Tournament. Only those with the courage to face 
          the unknown may submit their names. Do you have the bravery, strength, and determination it takes?
        </p>

        <p style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          marginTop: '1.5rem',
          color: '#e0e0e0',
        }}>
          Once chosen by the Goblet, your fate is sealed. Triumph brings glory, while defeat brings untold challenges. 
          The path is not for the faint-hearted. Are you prepared to confront the mysteries and perils that lie ahead?
        </p>

        {/* Call to Action */}
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={toggleModal}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              backgroundColor: '#ffd700',
              color: '#1a1a1a',
              border: '2px solid #ffd700',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(255, 215, 0, 0.5)',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffae42'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffd700'}
          >
            Enter Your Name in the Goblet
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.5s ease-in-out'
          }}>
            <div style={{
              backgroundColor: '#2c2c2c',
              padding: '2rem',
              borderRadius: '12px',
              width: '100%',
              maxWidth: '500px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
              animation: 'scaleUp 0.4s ease-in-out',
            }}>
              <h3 style={{
                color: '#ffd700',
                marginBottom: '1rem',
                textAlign: 'center',
                fontSize: '1.8rem',
                textShadow: '0 0 8px rgba(255, 215, 0, 0.8)'
              }}>
                Submit Your Entry
              </h3>
              <ContactForm />
              <button
                onClick={toggleModal}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  fontSize: '1rem',
                  backgroundColor: '#ffae42',
                  color: '#1a1a1a',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(255, 174, 66, 0.5)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffd700'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffae42'}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Additional styling for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleUp {
          from { transform: scale(0.9); }
          to { transform: scale(1); }
        }
      `}</style>
    </section>
  );
});

export default GobletOfFire;
