import { FC, memo, useState } from 'react';
import ContactForm from './gob';

const GobletOfFire: FC = memo(() => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section style={{
      backgroundImage: 'url(/images/goblet-background.jpg)',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
      color: '#f0f0f0',
      padding: '4rem 2rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        
        {/* Header Title */}
        <h2 style={{
          color: '#ffd700',
          fontSize: '3rem',
          marginBottom: '1rem',
          textShadow: '0 0 10px #ffd700, 0 0 20px #ffd700',
        }}>
          The Goblet of Fire
        </h2>
        
        {/* Brief Intro */}
        <p style={{
          fontSize: '1.5rem',
          fontStyle: 'italic',
          lineHeight: '1.8',
          margin: '0 auto',
          maxWidth: '90%',
          textShadow: '0 0 8px rgba(0,0,0,0.8)',
        }}>
          Welcome to the page of the Goblet of Fire! This ancient, enchanted artifact will choose the champions for the 
          Triwizard Tournament. Only the boldest witches and wizards may submit their names. Will you answer the call?
        </p>
        
        {/* Call to Action */}
        <div style={{ marginTop: '2rem' }}>
          <button
            onClick={toggleModal}
            style={{
              backgroundColor: '#ffd700',
              border: '2px solid #ffd700',
              borderRadius: '8px',
              boxShadow: '0 4px 10px rgba(255, 215, 0, 0.5)',
              color: '#1a1a1a',
              cursor: 'pointer',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              padding: '0.75rem 1.5rem',
              transition: 'all 0.3s ease',
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
            alignItems: 'center',
            animation: 'fadeIn 0.5s ease-in-out',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 1000,
          }}>
            <div style={{
              animation: 'scaleUp 0.4s ease-in-out',
              backgroundColor: '#2c2c2c',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.8)',
              maxWidth: '500px',
              padding: '2rem',
              width: '100%',
            }}>
              <h3 style={{
                color: '#ffd700',
                fontSize: '1.8rem',
                marginBottom: '1rem',
                textAlign: 'center',
                textShadow: '0 0 8px rgba(255, 215, 0, 0.8)',
              }}>
                Submit Your Entry
              </h3>
              <ContactForm />
              <button
                onClick={toggleModal}
                style={{
                  backgroundColor: '#ffae42',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0 4px 10px rgba(255, 174, 66, 0.5)',
                  color: '#1a1a1a',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
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
