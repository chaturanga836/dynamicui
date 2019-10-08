import React from 'react';
import DroppableComponent from '../DnD/DroppableComponent';

const Layout = (props) => {
  const classes = useStyles();
  const {
    children, position, onDragOver, className, onDragLeave,
  } = props;
  className.push(classes.paper);
  return (
    <Paper
      className={className}
      onDrop={(e) => { onDrop(e, position, 0); }}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {children}
    </Paper>
  );
};

export default DroppableComponent(Layout);
