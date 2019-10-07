import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import mainNavLayout from "../../components/MainNav";
import { FormControl, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";
import Icon from '@material-ui/core/Icon';

import Router from 'next/router'


const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));





const formCreate = () => {
  const classes = useStyles();


  const nextScreen =() =>{
    Router.push('/form/formlayout');
  }

  return (
    <React.Fragment>
      <FormControl className={classes.container} >
        <TextField
          id="outlined-full-width"
          label="Form Title"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="give a name to form"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{
            shrink: true
          }}
        />

        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Button variant="contained" color="primary" className={classes.button} onClick={nextScreen}>
                 Next
                 <Icon className={classes.rightIcon} />
            </Button>
            </Grid>
        </Grid>
      </FormControl>
    </React.Fragment>
  );
};

export default mainNavLayout(formCreate);
