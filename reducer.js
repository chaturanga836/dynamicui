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
    children: Data,
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
      const level = action.data.element.nestedLevel;
      const pIndex = action.data.parent.index;


      const iterate = (obj, currLevel, originLevel, index) => {
        console.log(obj);
        if (currLevel < originLevel) {
          iterate(obj.children);
        }
      };

      iterate(newDrawaingPad, level, level, pIndex);

      if (action.data.element.value === 'root') {
        // if (newDrawaingPad.children === undefined) {
        //   newDrawaingPad.children = [];
        // }
        // newDrawaingPad.children.push({
        //   parent: action.data.element,
        //   children: [],
        // });
      } else {
        // const res = iterable(action.data.element, newDrawaingPad, level);
        // console.log(res);
      }
      return assign(state, { drawaingPad: newDrawaingPad });
    }

    default:
      return state;
  }
}

export default reducer;
