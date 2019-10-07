import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const DroppableComponent = (elem) => {
  /**
 *
 * @param {*} e
 *
 * Drop Event handel here
 */


  const dispatch = useDispatch();


  let border = 'none';
  const [elemStyle, changeStyle] = useState({ border });

  const drop = (e) => {
    e.preventDefault();
    const jsonString = e.dataTransfer.getData('text/plain');
    const data = JSON.parse(jsonString);

    // console.log([elem,data])
    data.nestedlevel = elem.nestedlevel;
    changeStyle({ border });
    e.stopPropagation();
    dispatch({ type: 'DRAG_SELECTOR', data: { position: elem.meta.position, currentIndex: elem.currentIndex, element: data } });
  };

  const allowDrop = (e) => {
    e.preventDefault();
    border = '5px solid #eb4034';
    changeStyle({ border });
    e.stopPropagation();
  };

  const onDragLeav = (e) => {
    e.preventDefault();
    border = 'none';
    changeStyle({ border });
    e.stopPropagation();
  };

  return (
    <div
      id={elem.id}
      onDrop={drop}
      onDragOver={allowDrop}
      onDragLeave={onDragLeav}
      style={elemStyle}
      name="dropable-element"
    >
      {elem.children}
    </div>
  );
};


export default DroppableComponent;
