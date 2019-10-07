import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DroppableComponent from '../DnD/DroppableComponent';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: '#f2f2f2',
    minHeight: 50,
    margin: theme.spacing(2),
    width: 'auto',
  },

}));

const Container = (props) => {
  const { children, childelements, position, currentIndex } = props;

  const classes = useStyles();

  return (
    <DroppableComponent meta={{ position, children: childelements }} currentIndex={currentIndex}>
      <Grid container spacing={1} className={classes.root}>
        <Paper>
          {children}
        </Paper>
      </Grid>
    </DroppableComponent>
  );
};

export default Container;
