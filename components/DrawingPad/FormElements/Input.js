import React from 'react';
import TextField from '@material-ui/core/TextField';


const Input = (props) => {
  const { cssstyles } = props;
  return (
    <TextField
      id="outlined-name"
      className={cssstyles}
      margin="normal"
      variant="outlined"
    />
  );
};

export default Input;
