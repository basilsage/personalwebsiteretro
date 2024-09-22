import React from 'react';
import folderIcon from './folderIcon.png';

const FolderIconButton = ({ onClick, label }) => {
  return (
    <button onClick={onClick} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img src={folderIcon} alt="Open Notepad" width="100" height="100" />
      <span style={{ color: 'white', fontFamily: 'Arial', marginTop: '10px', fontSize: '16px' }}>{label}</span>
    </button>
  );
};

export default FolderIconButton;