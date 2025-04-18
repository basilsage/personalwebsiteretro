import React from 'react';
import FolderIconButton from './FolderIconButton'; // Import FolderIconButton
import FileIconButton from './FileIconButton';
import fileIcon from './fileIcon.png';
import './OpenFolderWindow.css';
const OpenFolderWindow = ({ onClose, titleText, files, onFileClick }) => {
  const openFolderWindowStyle = {
    width: '50vw',
    height: '50vh',
    border: '2px solid #C0C0C0',
    borderRadius: '3px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.3)',
    fontFamily: 'Arial, sans-serif',
    cursor: 'move',
    display: 'flex',
    flexDirection: 'column',
  };

  const titleBarStyle = {
    backgroundColor: 'rgb(215, 215, 215)',
    color: 'black',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid black',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '16px',
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

  const tableHeaderStyle = {
    backgroundColor: 'rgb(215, 215, 215)',
    padding: '8px',
    display: 'flex',
    fontSize: '14px',
    justifyContent: 'space-between',
    borderBottom: '1px solid black',    
  };

  return (
      <div 
        style={openFolderWindowStyle}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={titleBarStyle}>
          <p style={titleStyle}>{titleText}</p>
          <div style={closeButtonStyle} onClick={onClose}>X</div>
        </div>
        <div style={tableHeaderStyle}>
          <div style={{ textAlign: 'left', width: '50%' }}>Name</div>
          <div className="mobile-hidden" style={{ width: '25%' }}>Type</div>
          <div className="mobile-hidden" style={{ width: '25%' }}>Last Modified</div>          
        </div>
        {/* file list */}
        <div style={{ 
          backgroundColor: 'white', 
          height: '100%', 
          cursor: 'default',
          overflow: 'auto'
        }}>
          {files.map((file, index) => (
            <div key={index} style={{ 
              display: 'flex',
              justifyContent: 'space-between',              
              padding: '8px',
              borderBottom: '1px solid #eee',
              height: '20px',
              cursor: 'pointer',
            }}
            onClick={() => onFileClick(file.name)}
            >
              {/* Name column - always visible */}
              <div style={{ display: 'flex', alignItems: 'center', width: '50%' }}>
                <img src={fileIcon} alt={file.name} style={{ width: '20px', height: '20px' }} />
                <span style={{ marginLeft: '8px' }}>{file.name}</span>
              </div>
              {/* Type column - hidden on mobile */}
              <div className="mobile-hidden" style={{ width: '25%' }}>{file.type}</div>
              {/* Last Modified column - hidden on mobile */}
              <div className="mobile-hidden" style={{ width: '25%' }}>{file.last_modified}</div>
            </div>
          ))}
        </div>      
      </div>
  );
};

export default OpenFolderWindow;