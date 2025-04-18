import React, { useState, useRef } from 'react';
import DraggableComponent from './DraggableComponent';
import Notepad from './Notepad';
import StartButton from './StartButton';
import './App.css';
import FileIconButton from './FileIconButton';
import musicIcon from './musicIcon.png';
import FolderIconButton from './FolderIconButton';

// Miscellaneous folder files
import favoriteMoviesText from './miscellaneous_pieces/favorite_movies.js';

// Writing folder files
import loveLetterToDataBusinessesText from './writing_pieces/love_letter_to_data_businesses.js';

import envelopeIcon from './envelopeIcon.png'
import browserFileIcon from './browserFileIcon.png'

import OpenFolderWindow from './OpenFolderWindow';
import ReaderNotepad from './ReaderNotepad';

const App = () => {
  const [isNotepadVisible, setIsNotepadVisible] = useState(false); 
  const [isReaderNotepadVisible, setIsReaderNotepadVisible] = useState(false);
  const [isOpenFolderWindowVisible, setIsOpenFolderWindowVisible] = useState(false);
  const [selectedFolderName, setSelectedFolderName] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [selectedFileText, setSelectedFileText] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const isDragging = useRef(false);

  const handleMouseDown = (event) => {
    isDragging.current = false;
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  const handleMouseMove = () => {
    isDragging.current = true;    
  };

  const handleMouseUp = (buttonType, entityName, fileText) => {
    if (!isDragging.current) {
      if (buttonType === 'folder') {
        setSelectedFolderName(entityName); // Set the selected folder name        
        setIsOpenFolderWindowVisible(true);
      } else if (buttonType === 'file') {        
        setSelectedFileName(entityName)
        setSelectedFileText(fileText)
        setIsNotepadVisible(true);
      } else if (buttonType === 'music') {
        window.open('https://open.spotify.com/playlist/4vFqXxc10fEJ7G5GfpZSEi?si=29322aa5d28845f6', '_blank');
      } else if (buttonType === 'browserFile') {
        window.open('https://ossified-pluto-bdd.notion.site/Working-with-DJ-a-User-Manual-10946353e32d80308131d70f07cb56f8?pvs=4', '_blank');
      } else if (buttonType === 'envelope') {
        window.location.href = 'mailto:dj.satoda@gmail.com';
      }
    }
  };

  const getRandomPosition = (max) => Math.floor(Math.random() * max);

  const screenWidth = window.innerWidth * 0.8;
  const screenHeight = window.innerHeight * 0.8;

  const aboutMeText = 
    <span style={{ display: 'block' }}>
      hi, i'm <a href="https://www.linkedin.com/in/djsatoda/" target="_blank" rel="noopener noreferrer">dj</a> 
      
      <br/><br/>
      i live in nyc
      <br/><br/>
      i love software, startups, martial arts, and scruffy white dogs
      <br/><br/>
      i work as a product manager at <a href="https://mixpanel.com" target="_blank" rel="noopener noreferrer">mixpanel</a>, where i build data analytics software for other product managers. my favorite part of my job is jamming with silly engineers and cool designers 
      <br/><br/>
      when i grow up, i want to be a successful startup founder / angel investor
    </span>;

  const dearDiaryText = 
  <span style={{ display: 'block' }}>
    my goals in life:
    <br/><br/> 
    - built great software products 
    <br/><br/>     
    - be a formidable mixed martial artist
    <br/><br/>     
    - support low-income / poc founders and artists
    <br/><br/>     
  </span>;

  const writingFolderFiles = [
    { name: 'data_businesses.html', type: '.html', last_modified: '2025-04-18', text: loveLetterToDataBusinessesText },
  ];

  const miscellaneousFolderFiles = [
    { name: 'favorite_movies.txt', type: '.txt', last_modified: '2025-04-18', text: favoriteMoviesText },
  ];

  const handleWritingFileClick = (fileName) => {
    window.open(`/writing/${fileName}`, '_blank');
  }

  const handleMiscellaneousFileClick = (fileName) => {
    setSelectedFileName(fileName)
    setSelectedFileText(miscellaneousFolderFiles.find(file => file.name === fileName).text)
    setIsReaderNotepadVisible(true)
  }

  return (
    <div style={{ backgroundColor: '#008080', width: '100vw', height: '100vh' }}>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
      <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('music')} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <img src={musicIcon} alt="Music Icon" style={{ width: '100px', height: '100px' }}/>
          <span style={{ color: 'white', fontFamily: 'Arial', marginTop: '10px', fontSize: '16px' }}>2024_playlist.mp3</span>
        </div>

      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
      <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('envelope')} // Pass label as argument
          style={{ width: '100px', height: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} // Set size to 100px width and height and align content center
        >
          <img src={envelopeIcon} alt="Envelope Icon" style={{ width: '100px', height: '100px' }}/>
          <span style={{ color: 'white', fontFamily: 'Arial', fontSize: '16px' }}>email.exe</span>
        </div>

      </DraggableComponent>            

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
      <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('browserFile')} // Pass label as argument
          style={{ 
            width: '120px', 
            height: '100px', 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center' // Center content
          }} // Set size to 100px width and height
        >
          <img src={browserFileIcon} style={{ width: '100px', height: '100px' }}/>
          <span style={{ color: 'white', fontFamily: 'Arial', marginTop: '10px', fontSize: '16px' }}>personal_ad.html</span>
        </div>

      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('file', 'dear_diary.txt', dearDiaryText)} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FileIconButton 
            fileName="dear_diary.txt"            
          /> {/* Pass label prop */}
        </div>
      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('file', 'about_me.txt', aboutMeText)} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FileIconButton 
            fileName="about_me.txt"            
          /> {/* Pass label prop */}
        </div>
      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('folder', 'writing')} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FolderIconButton 
            label="writing"            
          /> {/* Pass label prop */}
        </div>
      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('folder', 'miscellaneous')} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FolderIconButton 
            label="miscellaneous"            
          /> {/* Pass label prop */}
        </div>
      </DraggableComponent>


      {isOpenFolderWindowVisible && (
        <DraggableComponent initialX={mousePosition.x} initialY={mousePosition.y}>
          <OpenFolderWindow 
            onClose={() => setIsOpenFolderWindowVisible(false)} 
            titleText={selectedFolderName} // Add titleText prop
            files={selectedFolderName === 'writing' ? writingFolderFiles : miscellaneousFolderFiles}
            onFileClick={selectedFolderName === 'writing' ? handleWritingFileClick : handleMiscellaneousFileClick}
          />
        </DraggableComponent>
        
      )}

      {isReaderNotepadVisible && (        
          <ReaderNotepad 
            onClose={() => setIsReaderNotepadVisible(false)}
            fileName={selectedFileName}
            fileText={selectedFileText}
          />
      )}
      
      {isNotepadVisible && (
        <DraggableComponent initialX={mousePosition.x} initialY={mousePosition.y}>
          <Notepad 
            onClose={() => setIsNotepadVisible(false)} 
            fileName={selectedFileName}
            fileText={selectedFileText} // Pass span element
          />
        </DraggableComponent>
      )}
      <div style={{ position: 'absolute', bottom: 0, height: '5vh', width: '100%', backgroundColor: '#C0C0C0' }}>
        <StartButton></StartButton>
      </div>
    </div>
  );
};

export default App;
