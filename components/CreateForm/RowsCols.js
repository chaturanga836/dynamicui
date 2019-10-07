import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({

    formControl: {
      display: 'flex',
  
    }
  }));

const rowCols = [1,2,3,4,5,6,7,8,9,10,11,12];

const RowsCols = () =>{

    const classes = useStyles();
    const dispatch = useDispatch();

    const countObj = useSelector( (state) => state);

    const layout = [];
  
    const handleRows = event =>{
        dispatch({type:'SET_ROWS','data':event.target.value});
    }
  
    const handleCols = event =>{
      //setCols(event.target.value);
      dispatch({type:'SET_COLS','data':event.target.value});
    }

 

    return(
        <React.Fragment>
            <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel  htmlFor="outlined-age-simple">
                No of Rows
              </InputLabel>
              <Select
                value={countObj.rowCount}
                onChange={handleRows}
                inputProps={{
                  name: "no of rows",
                  id: "outlined-age-simple"
                }}
              >
                {
                  rowCols.map( row=>(<MenuItem value={row} key={row}>{row}</MenuItem>))
                }

              </Select>
            </FormControl>
            </Grid>

            <Grid item xs={6}>
            <FormControl className={classes.formControl}>
              <InputLabel >
                No of Columns
              </InputLabel>
              <Select
                value={countObj.colCount}
                onChange={handleCols}
              >
                {
                  rowCols.map( row=>(<MenuItem value={row} key={row}>{row}</MenuItem>))
                }

              </Select>
            </FormControl>
            </Grid>
        </React.Fragment>
    )
}

export default RowsCols;