import React from 'react';
import DrawElement from './DrawElement';


const DrawComponent = (comp) => {
  return (
    <>
      {
    comp.childelements.map((v, k) => {
      if (v.children && v.children.length > 0) {
        return (
          <DrawElement name={v.element.value} key={v.id} nestedlevel={comp.nestedlevel} index={k}>
            <DrawComponent
              nestedlevel={comp.nestedlevel + 1}
              index={k}
              key={v.id}
              childelements={v.children}
            />
          </DrawElement>
        );
      }
      return (<DrawElement key={v.id} name={v.element.value} nestedlevel={comp.nestedlevel} index={k} />);
    })
  }
    </>
  );
};

export default DrawComponent;
