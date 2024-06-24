export type TreeNode = {
  id: string;
  label: string;
  children?: TreeNode[];
};

export const fake_data: TreeNode[] = [
  {
    id: 'grid',
    label: 'Root',
    children: [
      {
        id: '1',
        label: 'Location A',
        children: [
          {
            id: '2',
            label: 'Asset 1',
            children: [
              {
                id: '3',
                label: 'Component A1',
              },
              {
                id: '4',
                label: 'Component A2',
              }
            ]
          },
          {
            id: '5',
            label: 'Asset 2',
            children: [
              {
                id: '6',
                label: 'Component B1',
              },
              {
                id: '7',
                label: 'Component B2',
              }
            ]
          }
        ]
      },
      {
        id: '8',
        label: 'Location B',
        children: [
          {
            id: '9',
            label: 'Location C',
            children: [
              {
                id: '10',
                label: 'Asset 3',
                children: [
                  {
                    id: '11',
                    label: 'Component C1',
                  },
                  {
                    id: '12',
                    label: 'Component C2',
                  }
                ]
              },
              {
                id: '13',
                label: 'Component D1',
              }
            ]
          },
        ]
      },
      {
        id: 'grid 3',
        label: 'Component X'
      }
    ],
  },
];
