import React from 'react';
import microsoftLogo from './microsoftLogo.png';

const StartButton = () => {
  return (
    <div 
      onClick={() => alert('Hello')} // Add onClick event handler
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
        alignItems: 'center', // Center vertically
        justifyContent: 'center',
        boxSizing: 'border-box',
        fontSize: '1.5em', // Make text larger
        fontWeight: 'bold', // Make font weight heavier
        minWidth: '100px', // Set a minimum width for mobile
      }}
    >
      <img src={microsoftLogo} alt="Microsoft Logo" style={{ 
        height: '80%', 
        marginRight: '5px', 
        marginLeft: '5px', 
        alignSelf: 'center' // Center vertically
      }} />
      Start
    </div>
  );
}

export default StartButton;