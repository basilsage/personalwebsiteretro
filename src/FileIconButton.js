import React from 'react';
import fileIcon from './fileIcon.png';

const FileIconButton = ({ onClick, fileName }) => { // Add label prop
  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={fileIcon} alt={fileName} style={{ width: 'auto', height: '100px' }} /> {/* Use label for alt text */}
      <span style={{ color: 'white', fontFamily: 'Arial', marginTop: '10px', fontSize: '16px' }}>{fileName}</span> {/* Display label */}
    </button>
  );
};

export default FileIconButton;