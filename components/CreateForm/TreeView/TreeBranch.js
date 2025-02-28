import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useTreeItemStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:focus > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

const StyledTreeItem = (props) => {
  const classes = useTreeItemStyles();

  const {
    labelText, labelInfo, color, bgColor, ...other
  } = props;

  return (
    <TreeItem
      label={(
        <div className={classes.labelRoot}>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
)}
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
};

const TreeBranch = (props) => {
  const { childNodes, nodeId } = props;
  return (

    <>
      {
       childNodes.map((v, k) => {
         if (v.children.length > 0) {
           return (
             <StyledTreeItem nodeId={nodeId + k} labelText={v.element.text} key={v.id}>
               <TreeBranch nodeId={nodeId + childNodes.length + 1} childNodes={v.children}/>
             </StyledTreeItem>
           );
         }
         return (
           <StyledTreeItem nodeId={nodeId + k} labelText={v.element.text} key={v.id}/>
         );
       })
   }
    </>
  );
};

export default TreeBranch;
