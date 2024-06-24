import { ReactNode, useState } from 'react';
import { Asset, AssetTitle, SettingsContext, initialAsset } from './context';

type Props = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: Props) => {
  const [asset, setAsset] = useState<Asset>(initialAsset);
  const [selectedAsset, setSelectedAsset] = useState<AssetTitle | null>(null);

  const handleSelectedAsset = (assetTitle: AssetTitle | null) => {
    setSelectedAsset((prev) => prev === assetTitle ? null : assetTitle);
  };

  const providerValues: SettingsContext = {
    asset,
    setAsset,
    selectedAsset,
    setSelectedAsset,
    handleSelectedAsset,
  };

  return (
    <SettingsContext.Provider value={providerValues}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
