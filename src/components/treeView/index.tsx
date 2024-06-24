import { useState } from 'react';
import { TreeNode, fake_data } from './mocks';

type TreeItemProps = {
  node: TreeNode;
};

const TreeItem = ({ node }: TreeItemProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div style={{ marginLeft: '20px' }}>
      <div onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        {node.label}
      </div>
      {
        expanded && node.children && (
          <div>
            {
              node.children.map((child) => (
                <TreeItem key={child.id} node={child} />
              ))
            }
          </div>
        )
      }
    </div>
  );
};

const TreeView = () => {
  return (
    <div>
      {
        fake_data.map((data) => (
          <TreeItem key={data.id} node={data} />
        ))
      }
    </div>
  );
};

export default TreeView;
