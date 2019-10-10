import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  defaulElem: {
    padding: 0,
    margin: 0,
    display: 'inherit',
    width: '100%',
  },
  selectDroppable: {
    backgroundColor: 'rgba(102, 217, 255,0.75) !important',
    boxShadow: '-2px 2px 8px -1px rgba(0,0,0,0.75)',
  },
}));

const DroppableComponent = (args) => (WrapperComponent) => () => {
  /**
 *
 * @param {*} e
 *
 * Drop Event handel here
 */
  const classesStyle = useStyles();

  let className = classesStyle.defaulElem;
  const {
    childElement, nestedIndex, position, nodeId, labelText, rendercomponet,
    classes,
  } = args;

  const dispatch = useDispatch();
  const [elemStyle, changeStyle] = useState({ className });

  const drop = (e) => {
    e.preventDefault();
    const jsonString = e.dataTransfer.getData('text/plain');
    const data = JSON.parse(jsonString);

    changeStyle({ className });
    e.stopPropagation();
    dispatch({ type: 'DRAG_SELECTOR', data: { position, nestedIndex, element: data } });
  };

  const allowDrop = (e) => {
    e.preventDefault();
    className = classesStyle.selectDroppable;
    changeStyle({ className });
    e.stopPropagation();
  };

  const onDragLeav = (e) => {
    e.preventDefault();
    className = classesStyle.defaulElem;
    changeStyle({ className });
    e.stopPropagation();
  };

  const clNames = [elemStyle.className];

  if (classes) {
    Object.keys(classes).forEach((v) => clNames.push(classes[v]));
  }
  return (
    <WrapperComponent
      nodeId={nodeId}
      onDrop={drop}
      onDragOver={allowDrop}
      onDragLeave={onDragLeav}
      cssstyles={clNames.join(' ')}
      position={position}
      nestedindex={nestedIndex}
      childelements={childElement}
      labeltext={labelText}
      rendercomponent={rendercomponet}
    />
  );
};

export default DroppableComponent;
