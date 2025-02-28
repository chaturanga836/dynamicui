import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Container from './Container';
import Cell from './Cell';
// import GridComponent from '../CreateForm/GridComponents/GridComponent';
// import DroppableComponent from '../DnD/DroppableComponent';

const useStyles = makeStyles((theme) => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  root: {
    backgroundColor: '#f2f2f2',
    minHeight: 50,
    margin: theme.spacing(2),
    width: 'auto',
  },
  control: {
    margin: theme.spacing(2),
  },
}));


const LAYOUT = (props) => {
  const { children, nestedlevel, index } = props;

  return (
    <Paper>
      {children}
    </Paper>
  );
};


const DrawElement = (props) => {
  const classes = useStyles();
  const { children, nestedlevel, index } = props;
  switch (props.name.toUpperCase()) {
    case 'BUTTON': {
      return (<><Button nestedlevel={nestedlevel}>Button</Button></>);
    }

    case 'CONTAINER': {
      return (
        <Container>
            {children}
        </Container>
 
      );
    }

    case 'CELL': {
      return (
        <Cell>
          {children}
        </Cell>
      );
    }

    case 'LAYOUT': {
      return (
        <LAYOUT>
          {children}
        </LAYOUT>

      );
    }

    case 'INPUT': {
      return (
        <>
          <TextField
            id="outlined-name"
            className={classes.textField}
            margin="normal"
            variant="outlined"
            nestedlevel={nestedlevel}
          />

        </>
      );
    }

    case 'LABEL': {
      return (<><TextField nestedlevel={nestedlevel} /></>);
    }

    case 'RADIO-BUTTON': {
      return (<><Radio nestedlevel={nestedlevel} /></>);
    }

    case 'CHECK-BOX': {
      return (<><Checkbox nestedlevel={nestedlevel} /></>);
    }

    case 'RADIO-GROUP': {
      return (

        <RadioGroup />

      );
    }
    default: {
      return (<div nestedlevel={nestedlevel}>default</div>);
    }
  }
};

export default DrawElement;
