import React from 'react';
import { RadioGroup as RG } from '@material-ui/core';
import ToolBox from './Options/ToolBox';
import DroppableComponent from '../../DnD/DroppableComponent';

const BluPrint = (props) => {
  const {
    onDrop, cssstyles, onDragOver, onDragLeave, rendercomponent,
  } = props;

  return (
    <RG
      className={cssstyles}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {rendercomponent}
    </RG>
  );
};

const RadioGroup = (props) => {
  const { position, renderProps, nestedIndex } = props;
  const Elem = DroppableComponent({
    position, nestedIndex, rendercomponet: renderProps,
  })(BluPrint);

  return (
      <Elem />
  );
};

export default RadioGroup;
