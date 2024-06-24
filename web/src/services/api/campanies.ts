import request from './index';
import { Company } from '../types/company';

export const getAllCompanies = async (): Promise<Company[]> => {
  return request<Company[]>('/companies');
};

export const createCompany = async (name: string): Promise<Company> => {
  return request<Company>('/companies', {
    method: 'POST',
    body: JSON.stringify({ name }),
  });
};
