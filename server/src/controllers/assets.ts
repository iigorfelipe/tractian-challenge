import { Request, Response } from 'express';
import { Asset } from '../types/asset';
import { assetCompanyMock } from '../mocks';

const assets: { [key: string]: Asset[] } = {
  company1: assetCompanyMock,
  // TODO: add more
};

export const getAssetsByCompany = (req: Request, res: Response) => {
  const { companyId } = req.params;
  res.json(assets[companyId] || []);
};
