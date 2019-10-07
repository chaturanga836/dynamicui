import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Radio } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

const ComponentRender = (prop) =>{
    let component = <Radio />;

    switch(prop.inputtype) {
        case 'input':
            component =<TextField />
            break;
        case 'radio':   
            component =<Radio />
            break; 
        case 'checkbox':   
            component =<Checkbox />
            break; 
    }
    return(
        <React.Fragment>
            <Radio />
        </React.Fragment>
    )
}

export default ComponentRender;