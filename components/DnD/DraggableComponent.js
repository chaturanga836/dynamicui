import React from 'react';

const DraggableComponent = (elem) => {
  const drag = (ev) => {
    ev.stopPropagation();
    ev.dataTransfer.setData('text/plain', JSON.stringify(elem.object));
  };

  const notAllow = (e) => {
    e.stopPropagation();
    e.stopPropagation();
  };

  return (
    <div id={elem.id} draggable="true" onDragStart={drag} onDragOver={notAllow}>
      {elem.children}
    </div>
  );
};

export default DraggableComponent;
