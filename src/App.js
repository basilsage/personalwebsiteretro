import React, { useState, useRef } from 'react';
import DraggableComponent from './DraggableComponent';
import Notepad from './Notepad';
import StartButton from './StartButton';
import FolderIconButton from './FolderIconButton'; // Import the new button component
import './App.css';
import FileIconButton from './FileIconButton';
import musicIcon from './musicIcon.png';
import browserFileIcon from './browserFileIcon.png'

import OpenFolderWindow from './OpenFolderWindow';

const App = () => {
  const [isNotepadVisible, setIsNotepadVisible] = useState(false); 
  const [isOpenFolderWindowVisible, setIsOpenFolderWindowVisible] = useState(false);
  const [selectedFolderName, setSelectedFolderName] = useState(null)
  const [selectedFileName, setSelectedFileName] = useState(null)
  const [selectedFileText, setSelectedFileText] = useState(null)

  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = false;
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
      i love software, martial arts, and small white dogs
      <br/><br/>
      i work as a product manager at <a href="https://mixpanel.com" target="_blank" rel="noopener noreferrer">mixpanel</a>, where i build data analytics software for other product managers
      <br/><br/>
      when i grow up, i want to be a successful software founder / investor
    </span>;

  const dearDiaryText = 
  <span style={{ display: 'block' }}>
    goals in life:
    <br/><br/> 
    build successful software businesses
    <br/><br/>     
    run a venture fund investing in software businesses
    <br/><br/>     
    be a formidable mixed martial artist
    <br/><br/>     
    support low-income / minority founders and artists
    <br/><br/>     

  </span>;

  const hobbiesText = 
  <span style={{ display: 'block' }}>
    i love eating good food with friends, 
    <br/><br/> 
    when i grow up, i want to be a successful software founder / investor.
    <br/><br/>     

  </span>;


  const bucketListText = 
  <span style={{ display: 'block' }}>
    build a bootstrapped software business
    <br/><br/> 
    build a venture-backed software business
    <br/><br/> 
    run an accelerator for software business
    <br/><br/> 


  </span>;

  return (
    <div style={{ backgroundColor: '#008080', width: '100vw', height: '100vh' }}>
      {/* <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('folder', 'hobbies')} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FolderIconButton label="hobbies"/>
        </div>
      </DraggableComponent> */}

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
      <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('music')} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <img src={musicIcon} alt="Music Icon" style={{ width: '100px', height: '100px' }}/>
          <span style={{ color: 'white', fontFamily: 'Arial', marginTop: '10px', fontSize: '16px' }}>my2024playlist</span>
        </div>

      </DraggableComponent>

      

      

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
      <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('browserFile')} // Pass label as argument
          style={{ width: '120px', height: '100px' }} // Set size to 100px width and height
        >
          <img src={browserFileIcon} style={{ width: '100px', height: '100px' }}/>
          <span style={{ color: 'white', fontFamily: 'Arial', marginTop: '10px', fontSize: '16px' }}>working with me</span>
        </div>

      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('file', 'dearDiary.txt', dearDiaryText)} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FileIconButton 
            fileName="dearDiary.txt"            
          /> {/* Pass label prop */}
        </div>
      </DraggableComponent>

      <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
        <div
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={() => handleMouseUp('file', 'aboutMe.txt', aboutMeText)} // Pass label as argument
          style={{ width: '100px', height: '100px' }} // Set size to 100px width and height
        >
          <FileIconButton 
            fileName="aboutMe.txt"            
          /> {/* Pass label prop */}
        </div>
      </DraggableComponent>


      {isOpenFolderWindowVisible && (
        <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
          <OpenFolderWindow 
            onClose={() => setIsOpenFolderWindowVisible(false)} 
            titleText={selectedFolderName} // Add titleText prop
          />
        </DraggableComponent>
        
      )}
      
      {isNotepadVisible && (
        <DraggableComponent initialX={getRandomPosition(screenWidth)} initialY={getRandomPosition(screenHeight)}>
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
