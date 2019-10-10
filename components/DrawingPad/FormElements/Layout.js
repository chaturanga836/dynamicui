import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DroppableComponent from '../../DnD/DroppableComponent';

const useStyles = makeStyles((theme) => ({
  paperBody: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));


const BluPrint = (props) => {
  const classes = useStyles();
  const {
    onDrop, 
    onDragOver,
    onDragLeave, 
    position,
    childElement,
    nestedIndex,
    rendercomponent
  } = props;

  return (
    <Paper
      className={classes.paperBody}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {rendercomponent}
    </Paper>
  );
};
const Layout = (props) => {
  const {
    children, 
    position, 
    nestedIndex,
  } = props;

  const classes = useStyles();

  const Element = DroppableComponent({ position, nestedIndex, rendercomponet: children, classes })(BluPrint);
  return (<Element>{children}</Element>);
};

export default Layout;
