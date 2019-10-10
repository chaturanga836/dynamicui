import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DrawComponent from './DrawComponent';
import DroppableComponent from '../DnD/DroppableComponent';


const useStyles = makeStyles((theme) => ({
  paperBody: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));

const DrawindPadFormat = (props) => {
  const {
    onDrop,
    onDragOver,
    onDragLeave,
    position,
    childelements,
    nestedindex,
    cssstyles,
  } = props;

  return (
    <Paper
      className={cssstyles}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      <DrawComponent
        position={position}
        childelements={childelements}
        nestedIndex={nestedindex}
        rowIndex={0}
      />
    </Paper>
  );
};


const DrawingPad = () => {
  const classes = useStyles();
  const drwaObj = useSelector((state) => state.drawaingPad);
  const Element = DroppableComponent({
    position: [], nestedIndex: 0, childElement: drwaObj, classes,
  })(DrawindPadFormat);
  return <Element />;
};

// export default DroppableComponent(DrawingPad);
export default DrawingPad;
