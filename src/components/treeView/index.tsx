import { useEffect, useState } from 'react';
import { useSettings } from '../../contexts/settings';
import useTreeData, { TreeNode } from '../../hooks/useTreeData';
import { useTheme } from '../../contexts/theme';
import useFilteredTreeData from '../../hooks/useFilteredTreeData';

type TreeItemProps = {
  node: TreeNode;
  autoExpand?: boolean;
};

const TreeItem = ({ node, autoExpand }: TreeItemProps) => {
  const { selectedNode, setSelectedNode } = useSettings();
  const [expanded, setExpanded] = useState(autoExpand);
  const { theme } = useTheme();

  const isSelected = selectedNode?.id === node.id;

  const handleClick = () => {
    setExpanded(!expanded);
    setSelectedNode(node);
  };

  useEffect(() => {
    if (autoExpand) {
      setExpanded(true);
    }
  }, [autoExpand]);

  return (
    <div style={{ marginLeft: '20px' }}>
      <div
        onClick={handleClick}
        style={{
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: '6px',
          padding: '7px',
          backgroundColor: isSelected ? (theme === 'dark' ? '#2E2E2E' : 'lightblue') : 'transparent',
        }}
      >
        {
          node.children && node.children.length > 0 ? (
            <img
              src={`/arrow-down-${theme}.svg`}
              alt="arrow down"
            />
          ) : <div />
        }
        <img
          src={node.icon}
          alt="node"
          style={{
            width: node.icon === '/component.png' ? '20px' : '',
            height: node.icon === '/component.png' ? '20px' : ''
          }}
        />
        {node.label}
        {
          node.componentIcon && (
            <img
              src={node.componentIcon}
              alt="node"
            />
          )
        }
      </div>

      {
        expanded && node.children && (
          <div style={{ marginLeft: '2px' }}>
            {
              node.children.map((child) => (
                <TreeItem
                  key={child.id}
                  node={child}
                  autoExpand={true}
                />
              ))
            }
          </div>
        )
      }
    </div>
  );
};

const TreeView = () => {
  const { selectedCompanie, filters } = useSettings();
  const treeData = selectedCompanie ? useTreeData(selectedCompanie) : null;
  const filteredTreeData = useFilteredTreeData(treeData || [], filters);

  return (
    <div style={{ marginTop: '10px'}}>
      {
        filteredTreeData?.map((data) => (
          <TreeItem
            key={data.id}
            node={data}
            autoExpand={data.autoExpand}
          />
        ))
      }
    </div>
  );
};

export default TreeView;
