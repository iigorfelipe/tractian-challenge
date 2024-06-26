import { useState } from 'react';
import { useSettings } from '../../contexts/settings';
import useTreeData, { TreeNode } from '../../hooks/useTreeData';
import { useTheme } from '../../contexts/theme';

type TreeItemProps = {
  node: TreeNode;
};

const TreeItem = ({ node }: TreeItemProps) => {
  const { selectedNode, setSelectedNode } = useSettings();
  const [expanded, setExpanded] = useState(false);
  const { theme } = useTheme();

  const isSelected = selectedNode?.id === node.id;

  const handleClick = () => {
    setExpanded(!expanded);
    setSelectedNode(node);
  };

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
  const { selectedCompanie } = useSettings();
  const treeData = selectedCompanie ? useTreeData(selectedCompanie) : null;

  return (
    <div style={{ marginTop: '10px'}}>
      {
        treeData?.map((data) => (
          <TreeItem
            key={data.id}
            node={data}
          />
        ))
      }
    </div>
  );
};

export default TreeView;
