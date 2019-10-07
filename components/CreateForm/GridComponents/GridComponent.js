import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import DroppableComponent from '../../DnD/DroppableComponent';


/**
 * 
 * Grid Component Data Structure
 * 
 *  {
 *      id: 'root-1',
        nestedLevel: 1,
        index: 0,
        element: {
          canHaveChildren: true,
          text: 'GRID',
          value: 'grid',
        },
        children :[
         id: 'root-1',
         nestedLevel: 1,
         index: 0,
         element: {
          canHaveChildren: true,
          text: 'GRID',
          value: 'grid',
         },
        ]
 *  }
 * 
 */
const useStyles = makeStyles((theme) => ({
  gridborder: {
    borderColor: '#ff6666',
    borderWidth: 1,
    backgroundColor: '#ff6666',
  },
}));

const GridComponent = (props) => {
  const classes = useStyles();

  const rowsKey = [];
  const colKeys = [];
  const { spacing, rowCount, colCount, childelem } = props;

  for (let i = 0; i < rowCount; i++) {
    rowsKey.push(i);
  }

  for (let j = 0; j < colCount; j++) {
    colKeys.push(j);
  }

  return (
    <>
      <Grid container direction="row" spacing={2}>
        {rowsKey.map((val) => (
          <Grid item key={val} xs={12}>
            <Paper>
              <Grid container spacing={1}>
                {colKeys.map((v) => (
                  <Grid item xs key={val + v}>
                    <DroppableComponent id={v} object={childelem}>
                      <Paper className={classes.gridborder}>
                        <h1>Columns</h1>
                      </Paper>
                    </DroppableComponent>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

GridComponent.defaultProps = {
  rowCount: 1,
  colCount: 1,
  spacing: 1,
};

export default GridComponent;
