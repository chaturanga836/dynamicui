import Grid from "@material-ui/core/Grid";
import React from 'react';
import Downshift from 'downshift';
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles(theme => ({
    containerBox:{
        minHeight: 200,
        maxHeight: 500,
        overflow: 'auto',
    }
    
}));

const ComponentSelector = () =>{

    const classes = useStyles();

    const avaliableComponets = [

    ];

    return(
        <React.Fragment>
            <Grid container spacing={1}>
                <Grid item xs> 
                <Paper className={classes.containerBox}>
                    <List>
       
                    <ListItem>Item 1</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                        <ListItem>Item 2</ListItem>
                    </List>
                </Paper>
               
                </Grid>
                <Grid item xs>
                    <Paper className={classes.containerBox} ></Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default ComponentSelector