import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Container from './Container';
import Cell from './Cell';
import SelectDropDown from './SelectDropDown';

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
  const { children } = props;

  return (
    <Paper>
      {children}
    </Paper>
  );
};


const DrawElement = (props) => {
  const classes = useStyles();
  const {
    children, childelements, position 
  } = props;

  switch (props.name.toUpperCase()) {
    case 'BUTTON': {
      return (<><Button>Button</Button></>);
    }

    case 'CONTAINER': {
      return (
        <Container
          position={position}
          childelements={childelements}
        >
          {children}
        </Container>

      );
    }

    case 'CELL': {
      return (
        <Cell
          position={position}
          childelements={childelements}
        >
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

          />

        </>
      );
    }

    case 'LABEL': {
      return (<><TextField /></>);
    }

    case 'RADIO-BUTTON': {
      return (<><Radio /></>);
    }

    case 'CHECK-BOX': {
      return (<><Checkbox /></>);
    }

    case 'RADIO-GROUP': {
      return (

        <RadioGroup />

      );
    }

    case 'COMBOBOX': {
      return (

        <SelectDropDown />

      );
    }
    default: {
      return (<div>un identified element</div>);
    }
  }
};

export default DrawElement;
