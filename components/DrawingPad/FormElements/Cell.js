import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DroppableComponent from '../../DnD/DroppableComponent';
import ToolBox from './Options/ToolBox';

const useStyles = makeStyles((theme) => ({

  root: {
    minHeight: 50,
    margin: theme.spacing(1),
    width: 'auto',
    backgroundColor: '#ff9933',
  },

}));

const CellBluePrint = (props) => {
  const {
    onDrop, 
    onDragOver, 
    onDragLeave, 
    rendercomponent, 
    cssstyles,
  } = props;

  return (
    <Grid
      item
      className={cssstyles}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {rendercomponent || ''}
    </Grid>
  );
};
const Cell = (props) => {
  const classes = useStyles();
  const { position, renderProps, nestedIndex } = props;
  const Elem = DroppableComponent({
    position, nestedIndex, rendercomponet: renderProps, classes,
  })(CellBluePrint);
  return (
      <>
      <Elem />
      <ToolBox></ToolBox>
      </>
  );
};

export default Cell;
