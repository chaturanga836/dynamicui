import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ViewModule from '@material-ui/icons/ViewModule';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useSelector } from 'react-redux';
import TreeBranch from './TreeView/TreeBranch';

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});

const TreeViewList = () => {
  const classes = useStyles();
  const drwaObj = useSelector((state) => state.drawaingPad);

  return (
    <>
      <TreeView
        className={classes.root}
        defaultExpanded={['3']}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <TreeBranch nodeId="1" labelText="Grid" nestedindex={0} position={[]} labelIcon={ViewModule} childNodes={drwaObj} />
      </TreeView>
    </>
  );
};

export default TreeViewList;
