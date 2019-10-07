import {
  cloneDeep, remove, findLastIndex, assign,
} from 'lodash';
import { actionTypes } from './action';
import { Data } from './components/CreateForm/Data';

const iterable = (obj, pad, level) => {
  if (level < obj.level) {
    iterable(obj, pad[level].children[obj.index], level);
  } else {
    return pad[level].children[obj.index];
  }
};

export const initialState = {
  selectedComponents: [],
  formTitle: '',
  formName: '',
  count: 0,
  rowCount: 4,
  colCount: 2,
  drawaingPad: {
    children: [],
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_ROWS: {
      return assign(state, { rowCount: action.data });
    }

    case actionTypes.SET_COLS: {
      return assign(state, { colCount: action.data });
    }


    case actionTypes.SET_FORM_NAME: {
      return assign(state, { formName: action.data });
    }

    case actionTypes.SET_FORM_TITLE: {
      return assign(state, { formTitle: action.data });
    }

    case actionTypes.SET_SELECTION: {
      const newSelectedComponents = cloneDeep(state.selectedComponents);

      const found = findLastIndex(newSelectedComponents, (val) => val.value === action.data.value);

      if (found === -1) {
        newSelectedComponents.push(action.data);
      }

      return assign(state, { selectedComponents: newSelectedComponents });
    }

    case actionTypes.REMOVE_SELECTION: {
      const newSelectedComponents = cloneDeep(state.selectedComponents);

      remove(newSelectedComponents, (elem) => action.data.value === elem.value);

      return assign(state, { selectedComponents: newSelectedComponents });
    }

    case actionTypes.DRAG_SELECTOR: {
      const newDrawaingPad = cloneDeep(state.drawaingPad);
      const { position } = action.data;
      const { currentIndex } = action.data;
      const { element } = action.data;
    
      const iterate = (obj, elem, mPosition, mCurrentIndex, incval) => {
        const pos = mPosition[incval][1];

        if (mCurrentIndex < incval) {
          iterate(obj[pos].children, elem, mPosition, mCurrentIndex, incval + 1);
        } else {
          obj[pos].children.push({
            parent: 'root',
            id: `root-${incval}-${pos}`,
            nestedLevel: incval,
            index: pos,
            element: {
              canHaveChildren: elem.canHaveChildren,
              text: elem.text,
              value: elem.value,
              icon: 'input',
            },
            children: [],
          });
        }
      };

      console.log(currentIndex)

      if (currentIndex === 0) {
        const curlen = newDrawaingPad.children.length;
        newDrawaingPad.children.push(
          {
            parent: 'root',
            id: `root-${curlen}`,
            nestedLevel: 0,
            index: curlen,
            element: {
              canHaveChildren: element.canHaveChildren,
              text: element.text,
              value: element.value,
              icon: 'input',
            },
            children: [],
          },
        );
      } else {
        iterate(newDrawaingPad.children, element, position, currentIndex, 0);
      }


       console.log(newDrawaingPad);
      // if (action.data.element.value === 'root') {
      //   // if (newDrawaingPad.children === undefined) {
      //   //   newDrawaingPad.children = [];
      //   // }
      //   // newDrawaingPad.children.push({
      //   //   parent: action.data.element,
      //   //   children: [],
      //   // });
      // } else {
      //   // const res = iterable(action.data.element, newDrawaingPad, level);
      //   // console.log(res);
      // }
      return assign(state, { drawaingPad: newDrawaingPad });
    }

    default:
      return state;
  }
}

export default reducer;
