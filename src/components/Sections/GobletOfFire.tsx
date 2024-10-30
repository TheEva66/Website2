import { FC, memo, useState } from 'react';
import Link from 'next/link';
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
          The Triwizard Tournament
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
          Welcome, brave witch or wizard, to the Triwizard Tournament. This ancient magical artifact 
          holds the power to choose the champions for the Triwizard Tournament. Only those with the courage to face 
          the unknown and are 17+ may submit their names. Do you have the bravery, strength, and determination it takes?
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

        {/* Schedule Section */}
        <div style={{
          marginTop: '4rem',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          padding: '2rem',
          borderRadius: '12px',
          color: '#ffd700',
          textShadow: '0 0 8px #ffd700',
          fontSize: '1.2rem',
          lineHeight: '1.8',
        }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Tournament Schedule</h3>
          <p><strong>Opening Ceremony:</strong> November 1st, 7:00 PM - Great Hall</p>
          <p><strong>First Task:</strong> November 10th, 2:00 PM - Forbidden Forest Arena</p>
          <p><strong>Yule Ball:</strong> November 24th, 8:00 PM - The Great Hall</p>
          <p><strong>Second Task:</strong> November 30th, 3:00 PM - TBD</p>
          <p><strong>Final Task:</strong> December 7th, 1:00 PM - The Maze</p>
          <p><em>May the bravest champions emerge victorious!</em></p>
        </div>

        {/* Dumbledore's Speech */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '12px',
          color: '#f0f0f0',
          fontSize: '1.1rem',
          fontStyle: 'italic',
          textShadow: '0 0 6px rgba(0, 0, 0, 0.8)',
        }}>
         <h3 style={{ fontSize: '1.8rem', color: '#ffd700', marginBottom: '1rem', textShadow: '0 0 8px #ffd700' }}>
          What is the Triwizard Tournament?
        </h3>
        <p style={{ lineHeight: '1.5', fontSize: '1rem', color: '#f5e5c0' }}>
          "The Triwizard Tournament was created 700 years ago to strengthen bonds between <span style={{ color: '#ffb347', fontWeight: 'bold' }}>Hogwarts, Beauxbatons,</span> and <span style={{ color: '#ffb347', fontWeight: 'bold' }}>Durmstrang</span>. Each school selects a champion to compete in three magical tasks. After many failed attempts to revive the tournament due to high risk, our Ministries have finally ensured safety measures. 
          <br /><br />
          On <span style={{ color: '#ffcc66', fontWeight: 'bold' }}>Halloween</span>, the <span style={{ color: '#FFA500', fontWeight: 'bold' }}>Goblet of fire</span> will select champions to vie for the Triwizard Cup and a prize of <span style={{ color: '#ffb347', fontWeight: 'bold' }}>1,000 galleons</span>. Only students of age—17 or older—are eligible to enter. Let us welcome our guests warmly and show Hogwarts’ pride as we support our champion!"
        </p>
        </div>

        {/* School Links */}
        <div style={{
        marginTop: '3rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        fontSize: '1.2rem',
        }}>
        <Link href="/durmstrang">
            <a style={{
            backgroundColor: '#ff4500',
            color: '#ffffff',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc3700'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff4500'}
            >
            Durmstrang Institute
            </a>
        </Link>

        <Link href="/hogwarts">
            <a style={{
            backgroundColor: '#ffd700',
            color: '#ffffff',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cca600'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffd700'}
            >
            Hogwarts
            </a>
        </Link>

        <Link href="/beauxbatons">
            <a style={{
            backgroundColor: '#5d9cec',
            color: '#ffffff',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a80c4'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5d9cec'}
            >
            Beauxbatons Academy
            </a>
        </Link>
        <Link href="/qr">
            <a style={{
            backgroundColor: '#ffffff',
            color: '#000000',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#4a80c4'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#5d9cec'}
            >
            QR CODE
            </a>
        </Link>
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
