import { TreeNode } from "../../hooks/useTreeData";

export const nodeInfos = (selectedNode: TreeNode | null) => {
 return {
    topLeft: [
      {
        title: 'Tipo de Equipamento',
        value: selectedNode?.equipmentType
      },
      {
        title: 'Responsáveis',
        value: selectedNode?.responsible,
      },
    ],
    bottom: [
      {
        title: 'Sensor',
        icon: './sign.svg',
        value: selectedNode?.sensor
      },
      {
        title: 'Receptor',
        icon: './modem.svg',
        value: selectedNode?.receiver
      },
    ],
  }
};