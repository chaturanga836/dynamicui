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
 
  const classNames = ['drawElement',classes.paperBody]
  return (
    <>

      <DroppableComponent
        meta={{ position: [], children: drwaObj }}
        currentIndex={0}
        nestedIndex={0}
        rowIndex={0}
      >
        <Paper className={classNames.join(' ')}>
          <DrawComponent
            position={[]}
            childelements={drwaObj}
            nestedIndex={0}
            rowIndex={0}
          />
        </Paper>
      </DroppableComponent>

    </>
  );
};

export default DrawingPad;
