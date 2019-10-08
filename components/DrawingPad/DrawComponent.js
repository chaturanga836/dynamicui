import React from 'react';
import { cloneDeep } from 'lodash';
import DrawElement from './DrawElement';


const DrawComponent = (comp) => {
  const { nestedIndex } = comp;

  const encriment = (arr, xPos, Ypos) => {
    arr.push([xPos, Ypos]);
    return cloneDeep(arr);
  };

  return (
    <>
      {
    comp.childelements.map((v, k) => {
      const posArr = cloneDeep(comp.position);
      if (v.children && v.children.length > 0) {
        return (
          <DrawElement
            nestedIndex={nestedIndex}
            name={v.element.value}
            key={v.id}
            index={k}
            childelements={v.children}
            position={encriment(posArr, nestedIndex, k)}

          >
            <DrawComponent
              nestedIndex={nestedIndex + 1}
              position={encriment(posArr, nestedIndex + 1, k)}
              childelements={v.children}
            />
          </DrawElement>
        );
      }
      return (
        <DrawElement
          key={v.id}
          name={v.element.value}
          index={k}
          position={encriment(posArr, nestedIndex , k)}
          childelements={[]}
        />
      );
    })
  }
    </>
  );
};

export default DrawComponent;
