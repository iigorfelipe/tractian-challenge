import { ReactNode, useEffect, useState } from 'react';
import { Asset, SettingsContext, initialAsset } from './context';
import { createCompany, getAllCompanies } from '../../services/api/campanies';
import { Company } from '../../services/types/company';

type Props = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: Props) => {
  const [asset, setAsset] = useState<Asset>(initialAsset);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanie, setSelectedCompanie] = useState<Company | null>(null);

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

  const handleSelectedCompanie = (id: number) => {
    const company = companies.find((company) => company.id === id) || null;
    setSelectedCompanie(company);
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
