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

const DrawingPad = (props) => {
  const { onDrop, onDragOver, onDragLeave } = props;
  const classes = useStyles();
  const drwaObj = useSelector((state) => state.drawaingPad);

  const classNames = ['drawElement', classes.paperBody];
  return (
    <>
      <Paper className={classNames.join(' ')} onDrop={(e) => { onDrop(e, [], 0); }} onDragOver={onDragOver} onDragLeave={onDragLeave}>
        <DrawComponent
          position={[]}
          childelements={drwaObj}
          nestedIndex={0}
          rowIndex={0}
        />
      </Paper>

    </>
  );
};

export default DroppableComponent(DrawingPad);
