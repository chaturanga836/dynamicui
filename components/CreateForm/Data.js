import React from 'react';
import BorderOuter from '@material-ui/icons/BorderOuter';
import Code from '@material-ui/icons/Code';
import CalendarToday from '@material-ui/icons/CalendarToday';


export const Data = [
  {
    parent: 'root',
    id: '1',
    nestedLevel: 0,
    index: 1,
    element: {
      canHaveChildren: true,
      text: 'CONTAINER',
      value: 'CONTAINER',
      icon: 'container',
    },
    children: [
      {
        parent: '1',
        id: 'root-1',
        nestedLevel: 1,
        index: 0,
        element: {
          canHaveChildren: true,
          text: 'LAYOUT',
          value: 'layout',
          icon: 'layout',
        },
        children: [
          {
            parent: 'root-1',
            id: 'root-2',
            nestedLevel: 2,
            index: 0,
            element: {
              canHaveChildren: true,
              text: 'INPUT',
              value: 'input',
              icon: 'input',
            },
            children: [],
          },
        ],
      },
    ],
  },

  {
    parent: 'root',
    id: '2',
    nestedLevel: 0,
    index: 2,
    element: {
      canHaveChildren: true,
      text: 'CONTAINER',
      value: 'CONTAINER',
      icon: 'container',
    },
    children: [],
  },

  {
    parent: 'root',
    id: '3',
    nestedLevel: 0,
    index: 3,
    element: {
      canHaveChildren: true,
      text: 'CONTAINER',
      value: 'CONTAINER',
      icon: 'container',
    },
    children: [],
  },

];

export const Elements = [
  {
    value: 'container',
    text: 'CONTAINER',
    component: 'Container',
    canHaveChildren: true,
  },
  {
    value: 'layout',
    text: 'LAYOUT',
    component: 'Layout',
    canHaveChildren: true,
  },
  {
    value: 'input',
    text: 'INPUT',
    component: 'Input',
    canHaveChildren: false,
  },
  {
    value: 'combo-box',
    text: 'COMBO BOX',
    component: 'ComboBox',
    canHaveChildren: false,
  },
  {
    value: 'cell',
    text: 'CELL',
    component: 'Cell',
    canHaveChildren: false,
  },
  {
    value: 'radio-button',
    text: 'RADIO BUTTON',
    component: 'RadioElement',
    canHaveChildren: false,
  },

];
