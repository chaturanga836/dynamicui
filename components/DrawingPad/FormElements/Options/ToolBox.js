import React from 'react';
import Box from '@material-ui/core/Box';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  toolboxContainer: {
    bottom: 'auto',
    left: 'auto',
    top: '42%',
    position: 'absolute',
    zIndex: 1,
    visibility: 'hidden',
  },
  fab: {
    margin: theme.spacing(1),
    display: 'list-item',
    height: 36,
    width: 36,
    listStyle: 'none',
    fontSize: 1.5,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const options = [
  'None',
  'Atria',
  'Callisto',
  'Dione',
  'Ganymede',
  'Hangouts Call',
  'Luna',
  'Oberon',
  'Phobos',
  'Pyxis',
  'Sedna',
  'Titania',
  'Triton',
  'Umbriel',
];
const ITEM_HEIGHT = 48;

const ToolBox = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>

    
      <div className={classes.toolboxContainer}>

      <Fab color="secondary" aria-label="edit" className={classes.fab}>
        <EditIcon />
      </Fab>
      <Fab aria-label="delete" className={classes.fab}>
        <DeleteIcon />
      </Fab>
      </div>
      {props.children}
    </div>
  );
};

export default ToolBox;
