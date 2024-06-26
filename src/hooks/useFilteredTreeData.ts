import { useMemo } from 'react';
import { TreeNode } from './useTreeData';
import { Filters } from '../contexts/settings/context';

const filterNode = (node: TreeNode, filters: Filters): boolean => {
  const { search, sensor, status } = filters;
  const matchesSearch = !search || node.label.toLowerCase().includes(search.toLowerCase());
  const matchesSensor = !sensor || (node.componentIcon?.includes('energy') ?? false);
  const matchesStatus = !status || (node.componentIcon?.includes('alert') ?? false);

  return matchesSearch && matchesSensor && matchesStatus;
};

const filterTree = (nodes: TreeNode[], filters: Filters, parentMatches: boolean = false): TreeNode[] => {
  return nodes
    .map((node) => {
      const matches = filterNode(node, filters);
      if (node.children) {
        const filteredChildren = filterTree(node.children, filters, matches || parentMatches);
        if (filteredChildren.length > 0 || matches) {
          return {
            ...node,
            children: filteredChildren,
            autoExpand: (
              filteredChildren.length > 0 && (
                filters.search || filters.sensor || filters.status 
              )
            ),
          };
        }
      } else if (matches) {
        return {
          ...node,
          autoExpand: parentMatches,
        };
      }
      return null;
    })
    .filter((node) => node !== null) as TreeNode[];
};

const useFilteredTreeData = (treeData: TreeNode[], filters: Filters): TreeNode[] => {
  return useMemo(() => {
    return filterTree(treeData, filters);
  }, [treeData, filters]);
};

export default useFilteredTreeData;
