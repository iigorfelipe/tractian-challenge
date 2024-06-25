import { useTheme } from "../../contexts/theme";
import { communColors } from "../../contexts/theme/theme";
import SearchInput from "../searchInput";
import TreeView from "../treeView";

const Main = () => {

  const { isSmDown } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isSmDown ? 'column' : 'row',
        width: '100%',
        gap: '10px'
      }}
    >

      <div
        style={{
          border: `1px solid ${communColors.extra5}`,
          borderRadius: '4px',
          minWidth: '40%',
        }}
      >
        <SearchInput placeholder="Buscar Ativo ou Local" />

        <TreeView />
      </div>

      <div
        style={{
          border: `1px solid ${communColors.extra5}`,
          borderRadius: '4px',
          width: '60%',
        }}
      >

      </div>

    </div>
  );
};

export default Main;
