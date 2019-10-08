import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  defaulElem: {
    padding: 0,
    margin: 0,
    display: 'inherit',
    width:'100%',
  },
  selectDroppable: {
    '& > .drawElement': {
      backgroundColor: 'rgba(102, 217, 255,0.75) !important',
      boxShadow: '-2px 2px 8px -1px rgba(0,0,0,0.75)',
    },
  },

}));

const DroppableComponent = (elem) => {
  /**
 *
 * @param {*} e
 *
 * Drop Event handel here
 */

  const classes = useStyles();

  const dispatch = useDispatch();

  console.log(elem.className)
  let className = classes.defaulElem;
  const [elemStyle, changeStyle] = useState({ className });

  const drop = (e) => {
    e.preventDefault();
    const jsonString = e.dataTransfer.getData('text/plain');
    const data = JSON.parse(jsonString);

    // console.log([elem,data])
    data.nestedlevel = elem.nestedlevel;
    changeStyle({ className });
    e.stopPropagation();
    dispatch({ type: 'DRAG_SELECTOR', data: { position: elem.meta.position, currentIndex: elem.currentIndex, element: data } });
  };

  const allowDrop = (e) => {
    e.preventDefault();
    className = classes.selectDroppable;
    changeStyle({ className });
    e.stopPropagation();
  };

  const onDragLeav = (e) => {
    e.preventDefault();
    className = classes.defaulElem;
    changeStyle({ className });
    e.stopPropagation();
  };

  return (
    <div
      id={elem.id}
      onDrop={drop}
      onDragOver={allowDrop}
      onDragLeave={onDragLeav}
      className={elemStyle.className}
      name="dropable-element"
    >
      {elem.children}
    </div>
  );
};


export default DroppableComponent;
