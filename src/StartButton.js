import React from 'react';
import microsoftLogo from './microsoftLogo.png';

const StartButton = () => {
  return (
    <div 
      onClick={() => alert('dj satoda | built in nyc | updated 4.18.25')}
      style={{
        position: 'absolute',
        bottom: 0,
        height: '5vh',
        width: '7%',
        backgroundColor: '#C0C0C0',
        borderTop: '5px solid white',
        borderLeft: '5px solid white',
        borderBottom: '5px solid black',
        borderRight: '5px solid black',
        cursor: 'pointer', // Make cursor a pointer
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
        fontSize: '1.5em', // Make text larger
        fontWeight: 'bold', // Make font weight heavier
        minWidth: '130px', // Set a minimum width for mobile
        paddingRight: '6px'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={microsoftLogo} alt="Microsoft Logo" style={{ 
            height: '80%', 
            marginRight: '5px', 
            marginLeft: '5px'
        }} />
        <span>Start</span>
      </div>
      
    </div>
  );
}

export default StartButton;