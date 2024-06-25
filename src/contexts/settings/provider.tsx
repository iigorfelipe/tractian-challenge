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
  const [pending, setPending] = useState(false);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setPending(true);
        const data = await getAllCompanies();
        setCompanies(data);
      } catch (error) {
        console.error(error);
      } finally {
        setPending(false);
      }
    };

    fetchCompanies();
  }, []);

  const addCompany = async (companyName: string) => {
    setPending(true);
    try {
      const newCompany = await createCompany(companyName);
      if (newCompany && newCompany.id) {
        setCompanies([...companies, newCompany]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  const handleSelectedCompanie = async (id: string) => {
    const company = companies.find((company) => company.id === id) || null;

    if (company && company.id && selectedCompanie?.company.id !== id) {
      try {
        setPending(true);
        const [locations, assets] = await Promise.all([
          getLocationsByCompany(company.id),
          getAssetsByCompany(company.id)
        ]);

        setSelectedCompanie({
          company,
          locations,
          assets,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setPending(false);
      }
    } else {
      setSelectedCompanie(null);
    }
  };

  const providerValues: SettingsContext = {
    asset,
    setAsset,
    selectedCompanie,
    setSelectedCompanie,
    handleSelectedCompanie,
    companies,
    setCompanies,
    addCompany,
    pending
  };

  return (
    <SettingsContext.Provider value={providerValues}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
