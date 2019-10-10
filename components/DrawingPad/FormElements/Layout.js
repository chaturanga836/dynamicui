import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DroppableComponent from '../../DnD/DroppableComponent';
import ToolBox from './Options/ToolBox';

const useStyles = makeStyles((theme) => ({
  paperBody: {
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
}));


const BluPrint = (props) => {
  const {
    onDrop, cssstyles, onDragOver, onDragLeave, rendercomponent,
  } = props;

  return (
    <Paper
      className={cssstyles}
      onDrop={(e) => { onDrop(e); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {rendercomponent}
    </Paper>
  );
};
const Layout = (props) => {
  const { position, renderProps, nestedIndex } = props;

  const classes = useStyles();

  const Element = DroppableComponent({
    position, nestedIndex, rendercomponet: renderProps, classes,
  })(BluPrint);
  return (<ToolBox><Element /></ToolBox>);
};

export default Layout;
