import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { cloneDeep } from 'lodash';
import DroppableComponent from '../../DnD/DroppableComponent';

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
  const {
    childNodes, nodeId, nestedIndex, position,
  } = props;

  const posArr = cloneDeep(position);

  const encriment = (arr, xPos, Ypos) => {
    arr.push([xPos, Ypos]);
    return cloneDeep(arr);
  };


  return (
    <>
      {
       childNodes.map((v, k) => {
         if (v.children.length > 0) {
           if (v.element.canHaveChildren) {
             return (
               <DroppableComponent
                 key={`tree_branch_${v.id}`}
                 meta={
           {
             position: encriment(posArr, nestedIndex + 1, k),
             children: v.children,
           }
           }
               >
                 <StyledTreeItem nodeId={nodeId + k} labelText={v.element.text}>
                   <TreeBranch
                     nodeId={nodeId + childNodes.length + 1}
                     childNodes={v.children}
                     position={encriment(posArr, nestedIndex + 1, k)}
                   />
                 </StyledTreeItem>
               </DroppableComponent>
             );
           }

           return (
             <StyledTreeItem nodeId={nodeId + k} labelText={v.element.text} key={`tree_branch_${v.id}`}>
               <TreeBranch
                 nodeId={nodeId + childNodes.length + 1}
                 childNodes={v.children}
                 position={encriment(posArr, nestedIndex + 1, k)}
               />
             </StyledTreeItem>

           );
         }

         if (v.element.canHaveChildren) {
           return (
             <DroppableComponent
               key={`tree_branch_${v.id}`}
               meta={
              {
                position: encriment(posArr, nestedIndex, k),
                children: [],
              }
              }
             >
               <StyledTreeItem
                 nodeId={nodeId + k}
                 labelText={v.element.text}
                 position={encriment(posArr, nestedIndex, k)}
               />
             </DroppableComponent>
           );
         }
         return (
           <StyledTreeItem
             key={`tree_branch_${v.id}`}
             nodeId={nodeId + k}
             labelText={v.element.text}
             position={encriment(posArr, nestedIndex, k)}
           />
         );
       })
   }
    </>
  );
};

export default TreeBranch;
