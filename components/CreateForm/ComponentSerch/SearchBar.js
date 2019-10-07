import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';

import ListItemIcon from '@material-ui/core/ListItemIcon';
import SearchIcon from '@material-ui/icons/Search';
import CalendarToday from '@material-ui/icons/CalendarToday';
import Code from '@material-ui/icons/Code';
//import Label from '@material-ui/icons/Label';
import { useDispatch } from 'react-redux';
import BorderOuter from '@material-ui/icons/BorderOuter';
//import CropeSquare from '@material-ui/icons/';

const suggestions = [

  {
    value: 'container',
    text: 'CONTAINER',
    canHaveChildren: true,
    icon: () => (
      <>
        <BorderOuter />
      </>
    ),
  },
  {
    value: 'layout',
    text: 'LAYOUT',
    canHaveChildren: true,
    icon: () => (
      <>
        <BorderOuter />
      </>
    ),
  },
  {
    value: 'input',
    text: 'INPUT',
    canHaveChildren: false,
    icon: () => (
      <>
        <Code />
      </>
    ),
  },
  {
    value: 'combobox',
    text: 'COMBOBOX',
    canHaveChildren: false,
    icon: () => (
      <>
        <CalendarToday />
      </>
    ),
  },
  {
    value: 'radio-button',
    text: 'RADIO BUTTON',
    canHaveChildren: false,
    icon: () => (
      <>
        <CalendarToday />
      </>
    ),
  },
  {
    value: 'check-box',
    text: 'CHECK BOX',
    canHaveChildren: false,
    icon: () => (
      <>
        <CalendarToday />
      </>
    ),
  },
  {
    value: 'calendar-datepicker',
    text: 'CALENDAR PICKER',
    canHaveChildren: false,
    icon: () => (
      <>
        <CalendarToday />
      </>
    ),
  },
  {
    value: 'time-picker',
    text: 'TIME PICKER',
    canHaveChildren: false,
    icon: () => (
      <>
        <CalendarToday />
      </>
    ),
  },
  {
    value: 'button',
    text: 'BUTTON',
    canHaveChildren: true,
    icon: () => (
      <>
        <CalendarToday />
      </>
    ),
  },
];

const renderInput = (inputProps) => {
  const {
 InputProps, classes, ref, InputLabelProps, ...other 
} = inputProps;


  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange ={(e) => {}}
        variant="outlined"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        {...other}
      />
    </div>
  );
};

const renderSuggestion = (suggestionProps) => {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem,
  } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected =    selectedItem && (selectedItem.value || '').indexOf(suggestion.value) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.value}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      <ListItemIcon>{suggestion.icon()}</ListItemIcon>

      <Typography variant="inherit">{suggestion.value}</Typography>
    </MenuItem>
  );
};

const getSuggestions = (value, { showEmpty = false } = {}) => {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter((suggestion) => {
      const keep =          count < 5
          && suggestion.value.slice(0, inputLength).toLowerCase() === inputValue;

      if (keep) {
        count += 1;
      }

      return keep;
    });
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  container: {
    flexGrow: 1,
    position: 'relative',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  inputRoot: {
    flexWrap: 'wrap',
    color: '#fff',
    border: 'none',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  divider: {
    height: theme.spacing(2),
  },
}));

const itemToString = (item) => (item ? item.value : '');

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const changeItem = (selecteditem) => {
    dispatch({ type: 'SET_SELECTION', data: selecteditem });
    // clearSelection();
  };

  return (
    <>
      <Downshift
        id="downshift-simple"
        itemToString={itemToString}
        onChange={changeItem}
      >
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          selectedItem,
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: "Search.. "
          });

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: false,
                classes,
                label: "",
                InputLabelProps: getLabelProps({ shrink: true }),
                InputProps: { onBlur, onFocus },
                inputProps
              })}

              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({
                          item: suggestion,
                          key: suggestion.value
                        }),
                        highlightedIndex,
                        selectedItem
                      })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </>
  );
};

export default SearchBar;
