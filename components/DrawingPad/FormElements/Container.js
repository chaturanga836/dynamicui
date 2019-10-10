import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DroppableComponent from '../../DnD/DroppableComponent';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: '#f2f2f2',
    minHeight: 50,
    margin: theme.spacing(1),
    width: 'auto',
  },

}));


const ContainerGrid = (props) => {
  const {
    onDrop, cssstyles, onDragOver, onDragLeave, rendercomponent,
  } = props;

  return (

    <Grid
      container
      spacing={1}
      className={cssstyles}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {rendercomponent || ''}
    </Grid>
  );
};


const Container = (props) => {
  const classes = useStyles();

  const { position, renderProps, nestedIndex } = props;
  const Elem = DroppableComponent({
    position, nestedIndex, rendercomponet: renderProps, classes,
  })(ContainerGrid);

  return (
    <>
      <Elem />
    </>
  );
};
export default Container;
