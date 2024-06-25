import api from './index';
import { Asset } from '../types/treeView';

export const getAssetsByCompany = async (companyId: string): Promise<Asset[]> => {
  return api<Asset[]>(`/companies/${companyId}/assets`);
};
