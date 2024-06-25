import { Company } from '../types/treeView';
import api from './index';

export const getAllCompanies = async (): Promise<Company[]> => {
  return api<Company[]>('/companies');
};

export const createCompany = async (name: string): Promise<Company> => {
  return api<Company>('/companies', {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
};
