import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

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

import Chip from '@material-ui/core/Chip';
import InboxIcon from '@material-ui/icons/Inbox';
import TreeViewList from '../../components/CreateForm/TreeViewList';
import FormTitle from '../../components/CreateForm/FormTitle';
import InputFormName from '../../components/CreateForm/InputFormName';
import mainNavLayout from '../../components/MainNav';
import SearchBar from '../../components/CreateForm/ComponentSerch/SearchBar';

import Provider from '../../components/DnD/Provider';
import DraggableComponent from '../../components/DnD/DraggableComponent';
import DroppableComponent from '../../components/DnD/DroppableComponent';
import DrawingPad from '../../components/DrawingPad/DrawinPad';
import { Elements } from '../../components/CreateForm/Data';

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

  chip: {
    margin: theme.spacing(1),
  },
  paperBody: {
    padding: theme.spacing(4),
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
}));

const formLayout = () => {
  const classes = useStyles();

  const rCount = useSelector((state) => state.rowCount);
  const cCount = useSelector((state) => state.colCount);


  const selectedComponents = useSelector((state) => state.selectedComponents);
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

  const removeElement = (data) => {
    dispatch({ type: 'REMOVE_SELECTION', data });
  };

  const rootObj = {
    value: 'root',
    text: 'root',
    canHaveChildren: true,
  };
  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs>
              {' '}
              <InputFormName />
              {' '}
            </Grid>
            <Grid item xs>
              {' '}
              <FormTitle />
              {' '}
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <Grid container direction="row" spacing={1}>
            <Grid item xs={3}>
              <Grid container direction="row" spacing={1}>
                <Grid item xs={12}>
                  <AppBar
                    position="static"
                    color="primary"
                    className={classes.appBar}
                  >
                    <Toolbar>
                      <div className={classes.grow} />
                      <SearchBar />
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
                                <ListItem button>
                                  <ListItemIcon>
                                    <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={v.value} />
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
                                  <ListItemIcon>
                                    <InboxIcon />
                                  </ListItemIcon>
                                  <ListItemText primary={v.value} />
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
                    <h5>Tree View</h5>
                    <Divider />
                    <TreeViewList />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={9}>
              <DrawingPad />
            </Grid>
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
