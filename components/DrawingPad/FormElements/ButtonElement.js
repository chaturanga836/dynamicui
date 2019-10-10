import React from 'react';
import Button from '@material-ui/core/Button';
import ToolBox from './Options/ToolBox';

const ButtonElement = (props) => {
  const { text } = props;
  return (
    <ToolBox>

      <Button>
        {text}
      </Button>
    </ToolBox>
  );
};

export default ButtonElement;
