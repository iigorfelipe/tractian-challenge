import { createContext } from 'react';

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
  selectedAsset: AssetTitle | null;
  setSelectedAsset: React.Dispatch<React.SetStateAction<AssetTitle | null>>;
  handleSelectedAsset: (asset: AssetTitle | null) => void;
};

export const defaultSettingsValues: SettingsContext = {
  asset: initialAsset,
  setAsset: () => {},
  selectedAsset: null,
  setSelectedAsset: () => {},
  handleSelectedAsset: () => {}
};

export const SettingsContext = createContext<SettingsContext>(defaultSettingsValues);
