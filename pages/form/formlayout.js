import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/Inbox';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import TreeViewList from '../../components/CreateForm/TreeViewList';
import FormTitle from '../../components/CreateForm/FormTitle';
import InputFormName from '../../components/CreateForm/InputFormName';
import mainNavLayout from '../../components/MainNav';
import DraggableComponent from '../../components/DnD/DraggableComponent';
import DrawingPad from '../../components/DrawingPad/DrawinPad';
import { Elements } from '../../components/CreateForm/Data';

const space = [
  [1, 1, 0, 0, 1],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 1],
];

const h = space.length;
const w = space[0].length;

const usedSapces = [];

const moveLeft = (node, yPos, xPos) => {
  if (xPos < 0) {
    return;
  }

  if (space[xPos] === undefined || space[xPos][yPos] == '0') {
    return;
  }

  node.nearSpace.push([xPos, yPos]);
  moveLeft(node, yPos, xPos - 1);
};

const moveRight = (node, yPos, xPos) => {
  if (xPos >= w) {
    return;
  }

  if (space[xPos] === undefined || space[xPos][yPos] == '0') {
    return;
  }


  node.nearSpace.push([xPos, yPos]);
  moveRight(node, yPos, xPos + 1);
};

const moveUp = (node, yPos, xPos) => {
  if (yPos < 0) {
    return;
  }

  if (space[xPos] === undefined || space[xPos][yPos] == '0') {
    return;
  }

  node.nearSpace.push([xPos, yPos]);
  moveUp(node, yPos - 1, xPos);
};

const moveDown = (node, yPos, xPos) => {
  if (yPos >= h) {
    return;
  }

  if (space[xPos] === undefined || space[xPos][yPos] == '0') {
    return;
  }
  node.nearSpace.push([xPos, yPos]);
  moveDown(node, yPos + 1, xPos);
};

const findElem = (row, col) => {
  if (space[row] !== undefined && space[row][col] !== undefined && space[row][col] !== 0) {
    return true;
  }

  return false;
};

const findNeigbours = (pos) => {
  let [rPos, cPos] = pos.split('-');
  rPos = parseInt(rPos);
  cPos = parseInt(cPos);

  const arr = [];
  findElem(rPos - 1, cPos - 1) ? arr.push(`${rPos - 1}-${cPos - 1}`) : '';


  findElem(rPos - 1, cPos) ? arr.push(`${rPos - 1}-${cPos}`) : '';


  findElem(rPos - 1, cPos + 1) ? arr.push(`${rPos - 1}-${cPos + 1}`) : '';


  findElem(rPos, cPos - 1) ? arr.push(`${rPos}-${cPos - 1}`) : '';


  findElem(rPos, cPos) ? arr.push(`${rPos}-${cPos}`) : '';


  findElem(rPos, cPos + 1) ? arr.push(`${rPos}-${cPos + 1}`) : '';


  findElem(rPos + 1, cPos + 1) ? arr.push(`${rPos + 1}-${cPos + 1}`) : '';


  findElem(rPos + 1, cPos - 1) ? arr.push(`${rPos + 1}-${cPos - 1}`) : '';


  findElem(rPos + 1, cPos) ? arr.push(`${rPos + 1}-${cPos}`) : '';


  findElem(rPos + 1, cPos + 1) ? arr.push(`${rPos + 1}-${cPos + 1}`) : '';


  return arr;
};

Object.keys(space).forEach((k) => {
  Object.keys(space[k]).forEach((i) => {
    if (space[k][i] === 1) {
      const res = findNeigbours(`${parseInt(k)}-${parseInt(i)}`);
      usedSapces.push(res);
    }
  });
});

// Object.keys(usedSapces).forEach( k =>{
//   findNeigbours( usedSapces[k] );
// });
 console.log(usedSapces);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    display: 'flex',
  },
  paperHead: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  chiproot: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },

  listText: {
    fontSize: '0.75rem !important',
  },

  listIcon: {
    minWidth: '20px',
  },
  listIconRoot: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },

  chip: {
    margin: theme.spacing(1),
  },
  paperBody: {
    padding: '1px',
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperCol: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  paperRow: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#cdcdcd',
  },

  cardContainer: {
    maxHeight: 500,
  },

  selectEmpty: {
    marginTop: theme.spacing(2),
  },

  buttonStyle: {
    alignContent: 'center',
  },

  elementScroll: {
    overflow: 'auto',
  },
}));

const formLayout = () => {
  const classes = useStyles();

  const rCount = useSelector((state) => state.rowCount);
  const cCount = useSelector((state) => state.colCount);

  const dispatch = useDispatch();

  const rowsKey = [];
  const colKeys = [];

  for (let i = 0; i < rCount; i += 1) {
    rowsKey.push(i);
  }

  const nextScreen = () => {
    Router.push('/form/formlayout');
  };

  for (let j = 0; j < cCount; j += 1) {
    colKeys.push(j);
  }

  function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }


  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs>
              <InputFormName />
            </Grid>
            <Grid item xs>
              <FormTitle />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={2}>
              <Grid container direction="row" spacing={1}>
                <Grid item xs={12}>
                  <AppBar
                    position="static"
                    color="primary"
                  >
                    <Toolbar>
                      <Typography>Elements</Typography>

                    </Toolbar>
                  </AppBar>

                  <Paper className={classes.paperBody}>

                    <Grid container direction="row" spacing={1}>
                      <Grid item xs={6}>
                        <List component="nav" aria-label="main mailbox folders">
                          {
                        Elements.map((v, k) => {
                          if (k % 2 === 0) {
                            return (
                              <DraggableComponent key={k} object={v}>
                                <ListItem button className={classes.listIconRoot}>
                                  <ListItemIcon className={classes.listIcon}>
                                    <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={v.text} classes={{ primary: classes.listText }} />
                                </ListItem>
                              </DraggableComponent>
                            );
                          }
                          return (<Fragment key={k} />);
                        })
                      }
                        </List>
                      </Grid>
                      <Grid item xs={6}>
                        <List component="nav" aria-label="main mailbox folders">
                          {
                        Elements.map((v, k) => {
                          if (k % 2 !== 0) {
                            return (
                              <DraggableComponent key={k} object={v}>
                                <ListItem button>
                                  <ListItemIcon className={classes.listIcon}>
                                    <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={v.text} classes={{ primary: classes.listText }} />
                                </ListItem>
                              </DraggableComponent>
                            );
                          }
                          return (<Fragment key={k} />);
                        })
                      }
                        </List>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container direction="row" spacing={1}>
                <Grid item xs={12}>
                  <Paper className={classes.paperBody}>

                    <ElevationScroll>
                      <AppBar position="static" color="primary">
                        <Toolbar>
                          <Typography>Out Line</Typography>
                        </Toolbar>
                      </AppBar>
                    </ElevationScroll>
                    <Container className={classes.elementScroll}>
                      <Box my={2}>
                        <TreeViewList />
                      </Box>
                    </Container>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={8}>
              <DrawingPad />
            </Grid>

            <Grid item xs={2} />
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            spacing={5}
            alignContent="center"
            justify="center"
          >
            <Grid item xs>
              <Button
                variant="contained"
                color="primary"
                className={classes.buttonStyle}
                onClick={nextScreen}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

// export default formLayout;
export default mainNavLayout(formLayout);
