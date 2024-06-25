import { useTheme } from '../../contexts/theme';
import './index.css';

type AddInputProps = {
  placeholder: string;
  value: string;
  onChange: (event: any) => void;
  buttonClick: () => void;
  isDisabled: boolean;
}

export const AddInput = ({
  placeholder,
  value,
  onChange,
  buttonClick,
  isDisabled
}: AddInputProps) => {
  const { isSmDown } = useTheme();

  return (
    <div className="input-group">
      <input
        className="input"
        placeholder={placeholder}
        autoComplete="off"
        value={value}
        maxLength={20}
        onChange={onChange}
        style={{
          height: isSmDown ? '50px' : '31px',
          maxWidth: isSmDown ? '100%' : '150px',
        }}
      />
      <input
        className="button--submit"
        value="Adicionar"
        type="submit"
        onClick={buttonClick}
        disabled={isDisabled}
        style={{
          height: isSmDown ? '50px' : '31px',
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        }}
      />
    </div>
  );
};

