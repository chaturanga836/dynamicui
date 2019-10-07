import React from 'react';
import { last, cloneDeep } from 'lodash';
import DrawElement from './DrawElement';


const DrawComponent = (comp) => {
  const posArr = cloneDeep(comp.position);

  const positions = last(posArr);
  const xVal = positions[0];

  const encriment = (arr, xPos, Ypos) => {
    arr.push([xPos, Ypos]);
    return cloneDeep(arr);
  };
  //console.log(posArr)
  return (
    <>
      {
    comp.childelements.map((v, k) => {
      if (v.children && v.children.length > 0) {
        return (
          <DrawElement
            name={v.element.value}
            key={v.id}
            index={k}
            childelements={v.children}
            position={encriment(posArr, xVal + 1, k)}
            currentIndex={posArr.length}
          >
            <DrawComponent
              position={encriment(posArr, xVal + 1, k)}
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
          position={encriment(posArr, xVal + 1, k)}
          childelements={[]}
          currentIndex={posArr.length}
        />
      );
    })
  }
    </>
  );
};

export default DrawComponent;
