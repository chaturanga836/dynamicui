import React from 'react';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ToolBox from './Options/ToolBox';

const Input = (props) => {
  const { cssstyles } = props;
  return (
    <ToolBox>
      <TextField
        id="outlined-name"
        className={cssstyles}
        margin="normal"
        variant="outlined"
      />
    </ToolBox>
  );
};

export default Input;
