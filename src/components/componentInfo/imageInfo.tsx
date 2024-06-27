import { useTheme } from '../../contexts/theme';
import { communColors } from '../../contexts/theme/theme';


const ImageInfo = () => {
  const { isSmDown, selectedTheme } = useTheme();
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: `1px dashed ${selectedTheme.colors.border}`,
        width: isSmDown ? '100%' : '336px',
        height: '226px',
        borderRadius: '4px',
        background: '#55a7ff34',
        cursor: 'pointer'
      }}
    >
      <img src='./add-image.svg' alt='add image' />
      <span
        style={{
          color: communColors.extra3,
          fontWeight: 600,
          fontSize: '16px',
          display: 'flex',
          textAlign: 'center'
        }}
      >
        Adicionar imagem do Ativo
      </span>
    </div>
  );
};

export default ImageInfo;
