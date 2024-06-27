import { useSettings } from '../../contexts/settings';
import useTreeData from '../../hooks/useTreeData';
import useFilteredTreeData from '../../hooks/useFilteredTreeData';
import TreeItem from './treeItem';

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
