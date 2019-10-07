import React from 'react';
import { Checkbox } from '@material-ui/core';

const CheckBox = () =>{

    return(
        <React.Fragment>
        <Checkbox
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
        </React.Fragment>

    )
}

export default CheckBox;