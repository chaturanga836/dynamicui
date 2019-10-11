import React from 'react';
import { cloneDeep, last } from 'lodash';
import DrawElement from './DrawElement';


const DrawComponent = (comp) => {
  const { position } = comp;

  const encriment = (arr, xPos, Ypos) => {
    const newArr = cloneDeep(arr);
    newArr.push([xPos, Ypos]);
    return newArr;
  };

  return (
    <>
      {
    comp.childelements.map((v, k) => {
      const posArr = cloneDeep(position);
      const lastPosition = last(posArr);
      let xPos = 0;
      if (lastPosition !== undefined) {
        const [xP] = lastPosition;
        xPos = xP;
      }

      if (v.children && v.children.length > 0) {
        return (
          <DrawElement
            nestedIndex={xPos}
            name={v.element.value}
            element={v.element}
            key={v.id}
            index={k}
            childelements={v.children}
            position={encriment(posArr, xPos, k)}

          >
            <DrawComponent
              nestedIndex={xPos + 1}
              position={encriment(posArr, xPos + 1, k)}
              childelements={v.children}
            />
          </DrawElement>
        );
      }
      return (
        <DrawElement
          key={v.id}
          name={v.element.value}
          element={v.element}
          index={k}
          position={encriment(posArr, xPos, k)}
          childelements={[]}
        />
      );
    })
  }
    </>
  );
};

export default DrawComponent;
