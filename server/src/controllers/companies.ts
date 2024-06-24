import { Request, Response } from 'express';
import { Company } from '../types/company';
import { companiesMock } from '../mocks';

export const getAllCompanies = (req: Request, res: Response) => {
  res.json(companiesMock);
};

export const createCompany = (req: Request, res: Response) => {
  const newCompany: Company = {
    id: `company${companiesMock.length + 1}`,
    name: req.body.name,
  };
  companiesMock.push(newCompany);
  res.status(201).json(newCompany);
};
