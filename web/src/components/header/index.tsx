import { useEffect, useRef, useState } from "react";
import { useSettings } from "../../contexts/settings";
import { useTheme } from "../../contexts/theme";
import { communColors } from "../../contexts/theme/theme";
import AddCompanyModal from "../modal";


const Header = () => {
  const { toggleTheme, isSmDown, isMdDown } = useTheme();
  const {
    handleSelectedCompanie,
    selectedCompanie,
    setSelectedCompanie,
    companies,
    addCompany
  } = useSettings();

  const [isOpen, setIsOpen] = useState(false);
  const [showList, setShowList] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setShowList(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupRef]);

  const openModal = () => setIsOpen(true);
  
  const maxTags = isSmDown ? companies.length : (isMdDown ? 2 : 4);

  const visibleCompanies = companies.slice(0, maxTags);
  const hiddenCompanies  = companies.slice(maxTags);

  const ButtonTheme = (
    <button
      onClick={toggleTheme}
      style={{
        background: isSmDown && !selectedCompanie?.company.id ? '#2188FF' : 'none',
        border:'none',
        cursor: 'pointer',
        padding: isSmDown && !selectedCompanie?.company.id ? '10px 10px' : '0px',
        borderRadius: isSmDown && !selectedCompanie?.company.id ? '20px' : '0px',
        width: isSmDown && !selectedCompanie?.company.id ? '100%' : '',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <img src='/theme.svg' alt='theme icon' />
    </button>
  );

  return isSmDown && selectedCompanie?.company.id ? (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: communColors.extra1,       
        padding: '20px'
      }}
    >
      <button
        onClick={() => setSelectedCompanie(null)}
        style={{
          background: 'none',
          border:'none',
          cursor: 'pointer'
        }}
      >
        <img src='/arrow-back.svg' alt='arrow back' />
      </button>

      <span style={{ color: 'white' }}>{selectedCompanie.company.name}</span>

      {ButtonTheme}
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmDown ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: communColors.extra1,
        height: '50px',
        padding: '0 20px',
      }}
    >
      <div style={{ marginTop: isSmDown ? '18px' : '0px' }}>
        <img src='/logo.svg' alt='logo' />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          flexDirection: isSmDown ? 'column' : 'row',
          alignItems: 'center',
          marginTop: isSmDown ? '5vh' : '0px',
          minWidth: isSmDown ? '100%' : '400px',
          padding: `0px ${isSmDown ? '10px' : '0px'}`,
        }}
      >
        {
          visibleCompanies.map(({ id, name }) => {
            return (
              <button              
                key={id}
                type='button'
                onClick={() => handleSelectedCompanie(id)}
                style={{
                  display: isOpen && isMdDown && !isSmDown ? 'none' : 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: isSmDown ? '100%' : '130px',
                  padding: '0 1rem',
                  height: isSmDown ? '50px' : '30px',
                  textTransform: 'none',
                  fontFamily: 'Inter',
                  borderRadius: '4px',
                  border: 'none',
                  background: selectedCompanie?.company.id === id ? communColors.extra3 : communColors.extra2,
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                <img
                  src='/cubes-light.svg'
                  alt="cubes-icon"
                  style={{
                    marginRight: '5px',
                    color: selectedCompanie?.company.id === id ? 'white' : communColors.extra4,
                  }}
                />
                {name}
              </button>
            )
          })
        }

        {
          hiddenCompanies.length > 0 && (
            <div style={{ position: 'relative' }}>
              <button
                type='button'
                onClick={() => setShowList(true)}
                style={{
                  display: isMdDown && isOpen ? 'none' : 'block',
                  width: '35px',
                  height: '35px',
                  textTransform: 'none',
                  fontFamily: 'Inter',
                  borderRadius: '50%',
                  border: 'none',
                  background: communColors.extra2,
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                +{hiddenCompanies.length}
              </button>
              {
                showList && (
                  <div
                    ref={popupRef}
                    style={{
                      position: 'absolute',
                      top: '45px',
                      left: '-140px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                      background: communColors.extra1,
                      padding: '20px',
                      borderRadius: '20px',
                      zIndex: 10,
                    }}
                  >
                    {
                      hiddenCompanies.map(({ id, name }) => (
                        <button
                          key={id}
                          type='button'
                          onClick={() => handleSelectedCompanie(id)}
                          style={{
                            display: isMdDown && isOpen ? 'none' : 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            maxWidth: isSmDown ? '100%' : '300px',
                            padding: '0 1rem',
                            height: isSmDown ? '50px' : '30px',
                            textTransform: 'none',
                            fontFamily: 'Inter',
                            borderRadius: '4px',
                            border: 'none',
                            background: selectedCompanie?.company.id === id ? communColors.extra3 : communColors.extra2,
                            color: 'white',
                            cursor: 'pointer',
                          }}
                        >
                          <img
                            src='/cubes-light.svg'
                            alt="cubes-icon"
                            style={{
                              marginRight: '5px',
                              color: selectedCompanie?.company.id === id ? 'white' : communColors.extra4,
                            }}
                          />
                          {name}
                        </button>
                      ))
                    }
                  </div>
                )
              }
            </div>
          )
        }

        <button
          onClick={openModal}
          style={{        
            display: isOpen ? 'none' : 'flex',
            background: isSmDown ? '#2188FF' : 'none',
            border: 'none',
            cursor: 'pointer',
            marginTop: '1px',
            padding: isSmDown ? '10px 10px' : '0px',
            borderRadius: isSmDown ? '20px' : '0px',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img src='/add.svg' alt='add icon' />
        </button>
        <AddCompanyModal
          addCompany={addCompany}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>

      {ButtonTheme}

    </div>
  );
};

export default Header;
