import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { shadows } from '@material-ui/system';

const useStyles = makeStyles(() => ({

  selectDroppable: {
    backgroundColor: '#A0F790 !important',
    '& *': {
      backgroundColor: '#A0F790 !important',
    },
  },

  unselectDroppable: {
    backgroundColor: 'inherit',
    '& *': {
      backgroundColor: 'inherit',
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


  let className = classes.unselectDroppable;
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
    className = classes.unselectDroppable;
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
