import { ReactNode, useEffect, useState } from 'react';

import { createCompany, getAllCompanies } from '../../services/api/companies';
import { getLocationsByCompany } from '../../services/api/locations';
import { Company, TreeView } from '../../services/types/treeView';
import { getAssetsByCompany } from '../../services/api/assets';

import { Asset, SettingsContext, initialAsset } from './context';

type Props = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: Props) => {
  const [asset, setAsset] = useState<Asset>(initialAsset);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanie, setSelectedCompanie] = useState<TreeView | null>(null);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const data = await getAllCompanies();
        setCompanies(data);
      } catch (error) {
        console.error(error);
      };
    };

    fetchCompanies();
  }, []);

  const addCompany = async (companyName: string) => {
    const newCompany = await createCompany(companyName);
    if (newCompany && newCompany.id) {
      setCompanies([...companies, newCompany]);
    };
  };

  const handleSelectedCompanie = (id: string) => {
    const company = companies.find((company) => company.id === id) || null

    if (company && company.id) {
      const fetchLocations = async () => {
        try {
          const locations = await getLocationsByCompany(company.id);
          const assets = await getAssetsByCompany(company.id);

          setSelectedCompanie({
            company,
            locations,
            assets,
          });

        } catch (error) {
          console.error(error);
        };
      };
  
      fetchLocations();

    } else {
      setSelectedCompanie(null);
    };
  };
  

  const providerValues: SettingsContext = {
    asset,
    setAsset,
    selectedCompanie,
    setSelectedCompanie,
    handleSelectedCompanie,
    companies,
    setCompanies,
    addCompany
  };

  return (
    <SettingsContext.Provider value={providerValues}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
