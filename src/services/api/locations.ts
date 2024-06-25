import { Location } from '../types/treeView';
import api from './index';

export const getLocationsByCompany = async (companyId: string): Promise<Location[]> => {
  return api<Location[]>(`/companies/${companyId}/locations`);
};
