/* eslint-disable react-hooks/rules-of-hooks */


export const actionTypes = {
  SET_ROWS: 'SET_ROWS',
  SET_COLS: 'SET_COLS',
  SET_FORM_NAME: 'SET_FORM_NAME',
  SET_FORM_TITLE: 'SET_FORM_TITLE',
  SET_SELECTION: 'SET_SELECTION',
  REMOVE_SELECTION: 'REMOVE_SELECTION',
  DRAG_SELECTOR: 'DRAG_SELECTOR'
};

export function setRows() {
  return { type: actionTypes.SET_ROWS };
}

export function setColumns() {
  return { type: actionTypes.SET_COLS };
}

export function setFormName() {
  return { type: actionTypes.SET_FORM_NAME };
}

export function setTitle() {
  return { type: actionTypes.SET_FORM_TITLE };
}

export function setSelection(data) {
  return { type: actionTypes.SET_FORM_TITLE, data };
}
