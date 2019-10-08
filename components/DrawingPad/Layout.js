import React from 'react';
import DroppableComponent from '../DnD/DroppableComponent';

const Layout = (props) => {
  const classes = useStyles();
  const {
    children, childelements, position, className,
  } = props;
  className.push(classes.paper);
  return (
    <DroppableComponent meta={{ position, children: childelements }}>
      <Paper className={className}>
        {children}
      </Paper>
    </DroppableComponent>
  );
};

export default Layout;
