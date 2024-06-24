export type Asset = {
  id: string;
  name: string;
  parentId?: string | null;
  sensorId?: string;
  sensorType?: string;
  status?: string;
  locationId?: string | null;
  gatewayId?: string | null;
};
