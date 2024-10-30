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
            Professor Dumbledore's Opening Speech
          </h3>
          <p>
            "the Triwizard Tournament… well, some of you will not know what this tournament involves, so I hope those who do know will forgive me for giving a short explanation, and allow their attention to wander freely. The Triwizard Tournament was first established some seven hundred years ago, as a friendly competition between the three largest European schools of wizardry – Hogwarts, Beauxbatons, and Durmstrang. A champion was selected to represent each school, and the three champions competed in three magical tasks. The schools took it in turns to host the Tournament once every five years and it was generally agreed to be the a most excellent way of establishing ties between young witch’s and wizards of different nationalities – until, that is, the death toll mounted so high that the Tournament was discontinued. There have been several attempts over the centuries to reinstate the Tournament,” Dumbledore continued, “none of which have been very successful. However, our own Departments of International Magical Co-Operation and Magical Games and Sports have decided the time is ripe for another attempt. We have worked hard over the summer to ensure that, this time, no champion will find himself or herself in mortal danger. The Heads of Beauxbatons and Durmstrang have already arrived, and on Halloween we will have the Champion Selections. An impartial judge will decide which students, are most worthy to compete for the Triwizard Cup, the glory of their school and a thousand galleon personal prize money. “Eager though I know all of you will be able to bring the Triwizard Cup to Hogwarts,” he said, “the heads of the participating schools, along with the Ministry of Magic, have agreed to impose an agreed restriction on contenders this year. Only students who are of age – that is to say, seventeen years or older – will be allowed to put forward their names for consideration. This is a measure we feel is necessary, given that the Tournament tasks will still be difficult and dangerous, whatever precautions we take, and it is highly unlikely that students below Sixth and Seventh year will be able to cope with them. I will personally be ensuring that no underage student hoodwinks our impartial judge into making them Hogwarts champion. I therefore beg you not to waste your time submitting yourself if you are under seventeen, The delegations from Beauxbatons and Durmstrang will be staying with us for the greater part of this year. I know that you will all extend every courtesy to our foreign guests while they are with us, and will give your whole-hearted support to the Hogwarts champion when he or she is selected. And now, it is late, and I know how important it is to you all to be alert and rested as you enter you lessons tomorrow morning."
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
