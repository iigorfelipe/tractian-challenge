import { Request, Response } from 'express';
import { Location } from '../types/location';
import { locationCompanyMock } from '../mocks';

const locations: { [key: string]: Location[] } = {
  company1: locationCompanyMock,
  // TODO: add more
};

export const getLocationsByCompany = (req: Request, res: Response) => {
  const { companyId } = req.params;
  res.json(locations[companyId] || []);
};
