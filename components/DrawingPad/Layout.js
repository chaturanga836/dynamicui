import React from 'react';
import DroppableComponent from '../DnD/DroppableComponent';

const Layout = (props) => {
    const { children, nestedlevel, index } = props;
    return (
        <Paper>
          {children}
        </Paper>
      );
};

export default DroppableComponent(Layout);