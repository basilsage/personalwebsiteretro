import React from 'react';

const Notepad = ({ onClose, fileName, fileText }) => {
  const notepadStyle = {
    width: '400px',
    height: '300px',
    border: '2px solid #C0C0C0',
    borderRadius: '3px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'white',
  };

  const titleBarStyle = {
    backgroundColor: '#000080',
    color: 'white',
    padding: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '14px',
  };

  const closeButtonStyle = {
    backgroundColor: '#C0C0C0',
    border: '1px solid #808080',
    width: '20px',
    height: '20px',
    textAlign: 'center',
    lineHeight: '20px',
    cursor: 'pointer',
  };

  const textAreaStyle = {
    // width: '100%',
    // height: '100%',
    // height: 'calc(100% - 30px)',
    border: 'none',
    padding: '10px',
    boxSizing: 'border-box',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <div style={notepadStyle}>
      <div style={titleBarStyle}>
        <p style={titleStyle}>{fileName}</p>
        <div style={closeButtonStyle} onClick={onClose}>X</div>
      </div>
      <div style={{ height: 'calc(100% - 53px)', padding: '10px', overflowY: 'auto', maxHeight: 'calc(100% - 10px)' }}>
        <span style={{...textAreaStyle, whiteSpace: 'pre-wrap', display: 'block'}}>{fileText}</span>
      </div>
      
    </div>
  );
};

export default Notepad;