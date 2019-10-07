import React from 'react';
import Grid from '@material-ui/core/Grid';
import DroppableComponent from '../DnD/DroppableComponent';


const Cell = (props) => {
  const { children, childelements, position, currentIndex } = props;
  return (
    <DroppableComponent meta={{ position, children: childelements }} currentIndex={currentIndex}>
      <Grid item xs>
        {children}
      </Grid>
    </DroppableComponent>
  );
};

export default Cell;
