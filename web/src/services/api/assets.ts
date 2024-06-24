import request from './index';
import { Asset } from '../types/asset';

export const getAssetsByCompany = async (companyId: string): Promise<Asset[]> => {
  return request<Asset[]>(`/assets/${companyId}`);
};
