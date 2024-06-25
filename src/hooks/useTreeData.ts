import { useEffect, useState } from 'react';
import { Asset, Location, TreeView } from '../services/types/treeView';

export type TreeNode = {
  id: string;
  label: string;
  icon: string;
  father: string;
  componentIcon?: string;
  children?: TreeNode[];
};

const useTreeData = (selectedCompanie: TreeView) => {
  const [treeData, setTreeData] = useState<TreeNode[]>([]);

  useEffect(() => {
    if (!selectedCompanie) {
      setTreeData([]);
      return;
    }

    const buildLocationTree = (locations: Location[]): TreeNode[] => {
      const locationMap: { [key: string]: TreeNode } = {};
    
      locations.forEach((location) => {
        locationMap[location.id] = {
          id: location.id,
          label: location.name,
          children: [],
          father: location.parentId === null ? 'root' : 'subLocation',
          icon: '/location.svg'
        };
      });
    
      const rootLocations: TreeNode[] = [];
    
      locations.forEach((location) => {
        if (location.parentId) {
          const parent = locationMap[location.parentId];
          if (parent) {
            parent.children?.push(locationMap[location.id]);
          }
        } else {
          rootLocations.push(locationMap[location.id]);
        }
      });
    
      return rootLocations;
    };

    const addAssetsToLocationTree = (locationsTree:  TreeNode[], assets: Asset[]) => {
      const assetMap: { [key: string]: TreeNode } = {};

      assets.forEach((asset) => {
        let icon = '';
        let father = '';
        let componentIcon = '';

        if (asset.status) {
          componentIcon = `/${asset.status}.svg`;
        };

        if (asset.sensorType) {
          if (!asset.locationId || !asset.parentId) {
            icon = '/component.png';
            father = '.';
          }

          if (asset.locationId) {
            icon = '/component.png';
            father = '/location.svg';
          }

          if (asset.parentId) {
            icon = '/component.png';
            father = '/cube.svg';
          }
          
          if (asset.sensorType === 'energy') {
            componentIcon = `/energy.svg`;
          }
        }

        if (asset.locationId && !asset.sensorId) {
          icon = '/cube.svg';
          father = '/location.svg';
        }

        if (asset.parentId && !asset.sensorId) {
          icon = '/cube.svg';
          father = '/cube.svg';
        }
        

        assetMap[asset.id] = {
          id: asset.id,
          label: asset.name,
          children: [],
          icon,
          father,
          componentIcon
        };
      });

      assets.forEach((asset) => {
        if (asset.parentId) {
          const parent = assetMap[asset.parentId];
          if (parent) {
            parent.children?.push(assetMap[asset.id]);
          }
        }
      });

      const addAssetsToLocation = (nodes: TreeNode[]) => {
        nodes.forEach((node) => {
          assets.forEach((asset) => {
            if (asset.locationId === node.id) {
              node.children?.push(assetMap[asset.id]);
            }
          });

          if (node.children && node.children.length > 0) {
            addAssetsToLocation(node.children);
          }
        });
      };

      addAssetsToLocation(locationsTree);

      const rootAssets = assets.filter((asset) => !asset.locationId && !asset.parentId)
        .map((asset) => assetMap[asset.id]);

      return [...locationsTree, ...rootAssets];
    };

    const locationTree = buildLocationTree(selectedCompanie.locations);
    const treeData = addAssetsToLocationTree(locationTree, selectedCompanie.assets);

    setTreeData(treeData);
  }, [selectedCompanie]);

  return treeData;
};

export default useTreeData;
