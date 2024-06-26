self.addEventListener('message', function(e) {
  const { locations, assets } = e.data;

  const buildLocationTree = (locations) => {
    const locationMap = {};
    locations.forEach((location) => {
      locationMap[location.id] = {
        id: location.id,
        label: location.name,
        children: [],
        icon: '/location.svg'
      };
    });

    const rootLocations = [];
    locations.forEach((location) => {
      if (location.parentId) {
        const parent = locationMap[location.parentId];
        if (parent) {
          parent.children.push(locationMap[location.id]);
        }
      } else {
        rootLocations.push(locationMap[location.id]);
      }
    });

    return rootLocations;
  };

  const addAssetsToLocationTree = (locationsTree, assets) => {
    const assetMap = {};

    assets.forEach((asset) => {
      let icon = '';
      let componentIcon = '';

      if (asset.status) {
        componentIcon = `/${asset.status}.svg`;
      }

      if (asset.sensorType) {
        icon = '/component.png';
        if (asset.sensorType === 'energy') {
          componentIcon = `/energy.svg`;
        }
      } else if (asset.locationId && !asset.sensorId) {
        icon = '/cube.svg';
      } else if (asset.parentId && !asset.sensorId) {
        icon = '/cube.svg';
      }

      assetMap[asset.id] = {
        id: asset.id,
        label: asset.name,
        children: [],
        icon,
        componentIcon,
        sensor: asset.sensorId,
        receiver: asset.gatewayId,
        equipmentType: 'Motor Elétrico (Trifásico)',
        responsible: asset.status === 'alert' ? 'Mecânica' : 'Elétrica',
      };
    });

    assets.forEach((asset) => {
      if (asset.parentId) {
        const parent = assetMap[asset.parentId];
        if (parent) {
          parent.children.push(assetMap[asset.id]);
        }
      }
    });

    const addAssetsToLocation = nodes => {
      nodes.forEach((node) => {
        assets.forEach(asset => {
          if (asset.locationId === node.id) {
            node.children.push(assetMap[asset.id]);
          }
        });

        if (node.children && node.children.length > 0) {
          addAssetsToLocation(node.children);
        }
      });
    };

    addAssetsToLocation(locationsTree);

    const rootAssets = assets
      .filter((asset) => !asset.locationId && !asset.parentId)
      .map((asset) => assetMap[asset.id]);

    return [...locationsTree, ...rootAssets];
  };

  const locationTree = buildLocationTree(locations);
  const treeData = addAssetsToLocationTree(locationTree, assets);

  self.postMessage(treeData);
}, false);
