import {FC, memo} from 'react';

const GobletOfFire: FC = memo(() => {
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
        
        {/* Triwizard Tournament Information */}
        <div style={{marginTop: '2rem', textAlign: 'left'}}>
          <h3 style={{fontSize: '2rem', marginBottom: '1rem', color: '#c5a352'}}>Triwizard Tournament Details</h3>
          <ul style={{listStyle: 'none', padding: 0, lineHeight: '1.8'}}>
            <li>🏆 <strong>Champions:</strong> One student from each participating school</li>
            <li>🔥 <strong>Challenges:</strong> A series of deadly and magical tasks</li>
            <li>🎉 <strong>Reward:</strong> Eternal glory and the Triwizard Cup</li>
          </ul>
        </div>
        
        {/* Call to Action */}
        <div style={{marginTop: '2rem'}}>
          <button style={{padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: '#c5a352', color: '#1a1a1a', border: 'none', cursor: 'pointer'}}>
            Enter Your Name in the Goblet
          </button>
        </div>
        
        {/* Fun Facts or Additional Info */}
        <div style={{marginTop: '2rem', fontStyle: 'italic', color: '#cccccc'}}>
          <p>
            Fun Fact: The Goblet of Fire has been known to make its own decisions, occasionally causing surprises among the contestants.
          </p>
        </div>
      </div>
    </section>
  );
});

export default GobletOfFire;
