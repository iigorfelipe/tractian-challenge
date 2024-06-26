import { createContext } from 'react';
import { Company, TreeView } from '../../services/types/treeView';
import { TreeNode } from '../../hooks/useTreeData';

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

export type Filters = {
  search: string;
  sensor: boolean;
  status: boolean;
};

export const initialFilters = {
  search : '',
  sensor: false,
  status: false
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
  selectedNode: TreeNode | null;
  setSelectedNode: React.Dispatch<React.SetStateAction<TreeNode | null>>;

  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
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
  pending: false,
  selectedNode: null,
  setSelectedNode: () => {},
  filters: initialFilters,
  setFilters: () => {},
  searchInputValue: '',
  setSearchInputValue: () => {}
};

export const SettingsContext = createContext<SettingsContext>(defaultSettingsValues);
