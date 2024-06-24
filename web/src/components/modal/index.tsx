import { useState } from 'react';
import { AddInput } from '../addInput';
import { useTheme } from '../../contexts/theme';

type AddCompanyModalProps = {
  addCompany: (companyName: string) => void;
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
};

const AddCompanyModal = ({
  addCompany,
  isOpen,
  setIsOpen
}: AddCompanyModalProps) => {
  const [companyName, setCompanyName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const { isSmDown } = useTheme();

  const closeModal = () => {
    setIsOpen(false);
    setCompanyName('');
    setIsDisabled(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCompanyName(value);
    setIsDisabled(!value.trim());
  };

  const handleAddCompany = () => {
    addCompany(companyName);
    closeModal();
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
    >
      {isOpen && (
        <AddInput
          placeholder="Nome da Empresa"
          value={companyName}
          onChange={handleInputChange}
          buttonClick={handleAddCompany}
          isDisabled={isDisabled}
        />
      )}
      <button
        onClick={closeModal}
        style={{
          display: isOpen ? 'flex' : 'none',
          background: isSmDown ? '#2188FF' : 'none',
          border:'none',
          cursor: 'pointer',
          marginTop: '1px',
          padding: isSmDown ? '10px 10px' : '0px',
          borderRadius: isSmDown ? '20px' : '0px'
        }}
      >
        <img src='/close.svg' alt='close icon' />
      </button>
    </div>
  );
};

export default AddCompanyModal;
