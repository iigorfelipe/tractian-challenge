import { useState } from 'react';
import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';
import AddCompanyModal from '../modal';
import ButtonTheme from './buttonTheme';
import MobileHeader from './mobileHeader';
import VisibleCompnanies from './visibleCompanies';
import HiddenCompnanies from './hiddenCompanies';
import OpenModalButton from './openModalButton';
import Logo from './logo';


const Header = () => {
  const { isSmDown, isMdDown } = useTheme();
  const { selectedCompanie, companies } = useSettings();

  const [isOpen, setIsOpen] = useState(false);

  const MAX_TAGS = isSmDown ? companies.length : (isMdDown ? 2 : 4);

  return isSmDown && selectedCompanie?.company.id ? <MobileHeader /> : (
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
      <Logo />

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
        <VisibleCompnanies isOpen={isOpen} maxTags={MAX_TAGS} />
        <HiddenCompnanies isOpen={isOpen} maxTags={MAX_TAGS} />
        <OpenModalButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <AddCompanyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <ButtonTheme />

    </div>
  );
};

export default Header;
