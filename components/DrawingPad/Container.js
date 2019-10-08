import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import DroppableComponent from '../DnD/DroppableComponent';

const useStyles = makeStyles((theme) => ({

  root: {
    backgroundColor: '#f2f2f2',
    minHeight: 50,
    margin: theme.spacing(1),
    width: 'auto',
  },

}));

const Container = (props) => {
  const { children, childelements, position, className } = props;

  const classes = useStyles();
  className.push(classes.root);

  return (
    <DroppableComponent meta={{ position, children: childelements }}>
      <Grid container spacing={1}  className={className.join(' ')}>
        {children}
      </Grid>
    </DroppableComponent>
  );
};

export default Container;
