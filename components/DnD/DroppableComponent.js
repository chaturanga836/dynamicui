import React, { useState } from 'react';
import { useDispatch } from 'react-redux';


const DroppableComponent = (WrapComp) => {

  /**
 *
 * @param {*} e
 *
 * Drop Event handel here
 */


  return () => {
    const dispatch = useDispatch();
    
    let border = 'none';
    const [elemStyle] = useState({ border });

    const drop = (e) => {
      e.preventDefault();
      // const jsonString = e.dataTransfer.getData('text/plain');
      // const data = JSON.parse(jsonString);
      // data.nestedlevel = elem.nestedlevel;
      // border = 'none';
      // changeStyle({ border });
      e.stopPropagation();
      //dispatch({ type: 'DRAG_SELECTOR', data: { parent: elem, element: data } });
    };
    
    const allowDrop = (e) => {
      e.preventDefault();
      // border = '5px solid #eb4034';
      // changeStyle({ border });
      e.stopPropagation();
    };
    
    const onDragLeav = (e) => {
      e.preventDefault();
      // border = 'none';
      // changeStyle({ border });
      e.stopPropagation();
    };

    return(
      <div onDrop={drop} onDragOver={allowDrop} onDragLeave={onDragLeav} style={elemStyle} name="dropable-element">
        <WrapComp />
      </div>
    )};
};


export default DroppableComponent;
