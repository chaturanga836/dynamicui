import React from 'react';
import loadable from '@loadable/component';

const DrawElement = (props) => {
  const {
    children, 
    childelements, 
    position, 
    nestedIndex, 
    element,
  } = props;
 

  const { component } = element;
  //console.log(component);
  const MyComponent = loadable(() => import(`./FormElements/${component}`));
  const classNames = 'drawElement';



  return (
    <MyComponent
      position={position}
      childelements={childelements}
      className={classNames}
      nestedIndex={nestedIndex}
      renderProps={children}
    />
  );
};

export default DrawElement;
