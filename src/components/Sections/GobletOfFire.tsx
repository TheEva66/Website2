import { FC, memo, useState } from 'react';
import ContactForm from './gob';

const GobletOfFire: FC = memo(() => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <section style={{padding: '4rem 2rem', backgroundColor: '#1a1a1a', color: '#f0f0f0', textAlign: 'center'}}>
      <div style={{maxWidth: '800px', margin: '0 auto'}}>
        
        {/* Header Title */}
        <h2 style={{fontSize: '2.5rem', marginBottom: '1rem', color: '#c5a352'}}>The Goblet of Fire</h2>
        
        {/* Brief Intro */}
        <p style={{fontSize: '1.25rem', lineHeight: '1.6'}}>
          Welcome to the official page of the Goblet of Fire! This ancient magical artifact selects champions for the prestigious
          Triwizard Tournament, where bravery, skill, and a touch of luck determine the ultimate victor. Only the most daring
          witches and wizards will be chosen—do you have what it takes?
        </p>
        
        {/* Call to Action */}
        <div style={{marginTop: '2rem'}}>
          <button
            onClick={toggleModal}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              backgroundColor: '#c5a352',
              color: '#1a1a1a',
              border: 'none',
              cursor: 'pointer',
            }}>
            Enter Your Name in the Goblet
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
          }}>
            <div style={{backgroundColor: '#2c2c2c', padding: '2rem', borderRadius: '8px', width: '100%', maxWidth: '500px'}}>
              <h3 style={{color: '#f0f0f0', marginBottom: '1rem'}}>Submit Your Entry</h3>
              <ContactForm />
              <button
                onClick={toggleModal}
                style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.9rem',
                  backgroundColor: '#c5a352',
                  color: '#1a1a1a',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '4px'
                }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
});

export default GobletOfFire;
