// DraggableComponent.js
import React, { useState, useEffect } from 'react';

const DraggableComponent = ({ initialX, initialY, children }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [dragging, setDragging] = useState(false);
  const [rel, setRel] = useState(null); // position relative to the cursor

  const onMouseDown = (e) => {
    if (e.button !== 0) return;
    const pos = { x: e.pageX - position.x, y: e.pageY - position.y };
    setRel(pos);
    setDragging(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const onTouchStart = (e) => {
    const touch = e.targetTouches[0];
    const pos = { x: touch.pageX - position.x, y: touch.pageY - position.y };
    setRel(pos);
    setDragging(true);
    e.stopPropagation();
    e.preventDefault();
  };

  const onMouseUp = () => {
    setDragging(false);
  };

  const onTouchEnd = () => {
    setDragging(false);
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    setPosition({ x: e.pageX - rel.x, y: e.pageY - rel.y });
    e.stopPropagation();
    e.preventDefault();
  };

  const onTouchMove = (e) => {
    if (!dragging) return;
    const touch = e.targetTouches[0];
    setPosition({ x: touch.pageX - rel.x, y: touch.pageY - rel.y });
    e.stopPropagation();
    e.preventDefault();
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
    };
  }, [dragging, rel]);

  return (
    <div
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      style={{
        position: 'absolute',
        left: `${position.x}px`,
        top: `${position.y}px`,
        cursor: 'move',
      }}
    >
      {children}
    </div>
  );
};

export default DraggableComponent;