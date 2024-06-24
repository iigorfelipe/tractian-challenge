import request from './index';
import { Location } from '../types/location';

export const getLocationsByCompany = async (companyId: string): Promise<Location[]> => {
  return request<Location[]>(`/locations/${companyId}`);
};
