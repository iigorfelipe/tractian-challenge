import { createContext } from 'react';
import { Company, TreeView } from '../../services/types/treeView';

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
  selectedCompanie: TreeView | null;
  setSelectedCompanie: React.Dispatch<React.SetStateAction<TreeView | null>>;
  handleSelectedCompanie: (id: string) => void;

  companies: Company[];
  setCompanies: React.Dispatch<React.SetStateAction<Company[]>>;
  addCompany: (companyName: string) => void;
  pending: boolean;
};

export const defaultSettingsValues: SettingsContext = {
  asset: initialAsset,
  setAsset: () => {},
  selectedCompanie: null,
  setSelectedCompanie: () => {},
  handleSelectedCompanie: () => {},
  companies: [],
  setCompanies: () => {},
  addCompany: () => {},
  pending: false
};

export const SettingsContext = createContext<SettingsContext>(defaultSettingsValues);
