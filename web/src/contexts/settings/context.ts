import { createContext } from 'react';
import { Company } from '../../services/types/company';

export type AssetTitle = 'Apex Unit' | 'Tobias Unit' | 'Jaguar Unit';
export type AssetLabel = 'apexUnit' | 'tobiasUnit' | 'jaguarUnit';

export type Asset = {
  title: AssetTitle;
  label: AssetLabel;
};

export const initialAsset: Asset = {
  title: 'Apex Unit',
  label: 'apexUnit',
}

export type SettingsContext = {
  asset: Asset;
  setAsset: React.Dispatch<React.SetStateAction<Asset>>;
  selectedCompanie: Company | null;
  setSelectedCompanie: React.Dispatch<React.SetStateAction<Company | null>>;
  handleSelectedCompanie: (id: number) => void;

  companies: Company[];
  setCompanies: React.Dispatch<React.SetStateAction<Company[]>>;
  addCompany: (companyName: string) => void;
};

export const defaultSettingsValues: SettingsContext = {
  asset: initialAsset,
  setAsset: () => {},
  selectedCompanie: null,
  setSelectedCompanie: () => {},
  handleSelectedCompanie: () => {},
  companies: [],
  setCompanies: () => {},
  addCompany: () => {}
};

export const SettingsContext = createContext<SettingsContext>(defaultSettingsValues);
