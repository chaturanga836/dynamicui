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

const DrawingPad = () => {
  const classes = useStyles();
  const drwaObj = useSelector((state) => state.drawaingPad);
  return (
    <>
      <Paper className={classes.paperBody}>
        <DrawComponent
          childelements={drwaObj.children}
          nestedlevel={0}
          index={0}
        />
      </Paper>
    </>
  );
};

export default DroppableComponent(DrawingPad);
