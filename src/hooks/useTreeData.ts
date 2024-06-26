import { useEffect, useState } from 'react';
import { TreeView } from '../services/types/treeView';

export type TreeNode = {
  id: string;
  label: string;
  icon: string;
  componentIcon?: string;
  children?: TreeNode[];
  sensor: string;
  receiver: string;
  equipmentType: string;
  responsible: string;
  autoExpand?: boolean;
};

const useTreeData = (selectedCompanie: TreeView) => {
  const [treeData, setTreeData] = useState<TreeNode[]>([]);

  useEffect(() => {
    if (!selectedCompanie) {
      setTreeData([]);
      return;
    }

    const worker = new Worker(new URL('../workers/treeWorker.js', import.meta.url));

    worker.postMessage({
      locations: selectedCompanie.locations,
      assets: selectedCompanie.assets,
    });

    worker.onmessage = (e) => {
      setTreeData(e.data);
    };

    return () => {
      worker.terminate();
    };
  }, [selectedCompanie]);

  return treeData;
};

export default useTreeData;
