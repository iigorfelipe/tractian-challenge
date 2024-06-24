export const assetCompanyMock = [
  {
    id: '656734821f4664001f296973',
    name: 'Fan - External',
    parentId: null,
    sensorId: 'MTC052',
    sensorType: 'energy',
    status: 'operating',
    locationId: null
  },
  {
    id: '656a07bbf2d4a1001e2144c2',
    name: 'CONVEYOR BELT ASSEMBLY',
    locationId: '656a07b3f2d4a1001e2144bf'
  },
  {
    id: '656a07c3f2d4a1001e2144c5',
    name: 'MOTOR TC01 COAL UNLOADING AF02',
    parentId: '656a07bbf2d4a1001e2144c2'
  },
  {
    id: '656a07cdc50ec9001e84167b',
    name: 'MOTOR RT COAL AF01',
    parentId: '656a07c3f2d4a1001e2144c5',
    sensorId: 'FIJ309',
    sensorType: 'vibration',
    status: 'operating', gatewayId: 'FRH546'
  },
];

export const companiesMock = [
  { id: '1_apex-unit', name: 'Apex Unit' },
  { id: '2_tobias-unit', name: 'Tobias Unit' },
  { id: '3_jaguar-unit', name: 'Jaguar Unit' },
];

export const locationCompanyMock = [
  {
    id: '65674204664c41001e91ecb4',
    name: 'PRODUCTION AREA - RAW MATERIAL',
    parentId: null
  },
  {
    id: '656a07b3f2d4a1001e2144bf',
    name: 'CHARCOAL STORAGE SECTOR',
    parentId: '65674204664c41001e91ecb4'
  },
]
