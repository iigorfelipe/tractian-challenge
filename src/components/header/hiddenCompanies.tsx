import { useEffect, useRef, useState } from 'react';
import { useSettings } from '../../contexts/settings';
import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';
import Button from './button';

type HiddenCompnaniesProps = {
  isOpen: boolean;
  maxTags: number;
};

const HiddenCompnanies = ({ isOpen, maxTags }: HiddenCompnaniesProps) => {
  const { isMdDown } = useTheme();
  const { companies } = useSettings();

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

  const hiddenCompanies  = companies.slice(maxTags);


  return (
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
                  <Button
                    key={id}
                    id={id}
                    name={name}
                    isOpen={isOpen}
                  />
                ))
              }
            </div>
          )
        }
      </div>
    )   
  );
};

export default HiddenCompnanies;
