import React from 'react';
import DroppableComponent from '../DnD/DroppableComponent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: '#f2f2f2',
    minHeight: 50,
    margin: theme.spacing(2),
    width: 'auto',
  },

}));

const Container = (props) => {
    const { children, nestedlevel, index } = props;

    const classes = useStyles();
  
    return (
      <Grid container spacing={1} className={classes.root}>
        <Paper>
          {children}
        </Paper>
      </Grid>
    );
  };

export default DroppableComponent(Container);
