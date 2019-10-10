import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import DroppableComponent from '../../DnD/DroppableComponent';
import ToolBox from './Options/ToolBox';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: '#f2f2f2',
    minHeight: 50,
    margin: theme.spacing(1),
    width: 'auto',
  },

}));

const CellBluePrint = (props) => {
  const {
    onDrop, onDragOver, onDragLeave, rendercomponent, cssstyles,
  } = props;
  return (
    <Grid
      item
      xs
      className={cssstyles}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {rendercomponent}
    </Grid>
  );
};
const Cell = (props) => {
  const classes = useStyles();
  const { position, children, nestedIndex } = props;

  const Elem = DroppableComponent({
    position, nestedIndex, rendercomponet: children, classes,
  })(CellBluePrint);
  return (
    <ToolBox>
      <Elem />
    </ToolBox>
  );
};

export default Cell;
