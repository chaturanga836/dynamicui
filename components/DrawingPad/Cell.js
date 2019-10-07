import React from 'react';
import DroppableComponent from '../DnD/DroppableComponent';
import Grid from '@material-ui/core/Grid';


const Cell = (props) =>{

    const { children, nestedlevel, index } = props;
    return (
      <Grid item xs>
        {children}
      </Grid>
    );
}

export default DroppableComponent(Cell);