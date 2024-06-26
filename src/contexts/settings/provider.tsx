import { ReactNode, useEffect, useState } from 'react';

import { getAllCompanies } from '../../services/api/companies';
import { getLocationsByCompany } from '../../services/api/locations';
import { Company, TreeView } from '../../services/types/treeView';
import { getAssetsByCompany } from '../../services/api/assets';

import { Asset, SettingsContext, initialAsset, initialFilters } from './context';
import { TreeNode } from '../../hooks/useTreeData';

type Props = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: Props) => {
  const [asset, setAsset] = useState<Asset>(initialAsset);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanie, setSelectedCompanie] = useState<TreeView | null>(null);
  const [selectedNode, setSelectedNode] = useState<TreeNode | null>(null);
  const [pending, setPending] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const [searchInputValue, setSearchInputValue] = useState('');

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
    // try {
    //   const newCompany = await createCompany(companyName);
    //   if (newCompany && newCompany.id) {
    //     setCompanies([...companies, newCompany]);
    //   }
    // } catch (error) {
    //   console.error(error);
    // };
    setCompanies([
      ...companies,
      {
        id: `fake-id-${companies.length + 1}`,
        name: companyName
      }
    ]);
  };

  const handleSelectedCompanie = async (id: string) => {
    const company = companies.find((company) => company.id === id) || null;

    if (company && company.id && selectedCompanie?.company.id !== id) {

      if (id.includes('fake-id-')) {
        setSelectedCompanie({
          company,
          locations: [],
          assets: []
        });

      } else {

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
      }

    } else {
      setSelectedCompanie(null);
    }
  
    setSelectedNode(null);
    setFilters(initialFilters);
    setSearchInputValue('');
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
    pending,
    selectedNode,
    setSelectedNode,
    filters,
    setFilters,
    searchInputValue,
    setSearchInputValue
  };

  return (
    <SettingsContext.Provider value={providerValues}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
