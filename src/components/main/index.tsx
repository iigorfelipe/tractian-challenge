import { useSettings } from "../../contexts/settings";
import { useTheme } from "../../contexts/theme";
import ComponentInfo from "../componentInfo";
import SearchInput from "../searchInput";
import TreeView from "../treeView";

const Main = () => {

  const { isSmDown, isMdDown, selectedTheme } = useTheme();
  const { selectedNode } = useSettings();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isMdDown ? 'column' : 'row',
        width: '100%',
        gap: '10px'
      }}
    >
      {
        isSmDown && selectedNode?.componentIcon ? null : (
          <div
            style={{
              border: `1px solid ${selectedTheme.colors.border}`,
              borderRadius: '4px',
              minWidth: isSmDown ? '100%' : '40%',
            }}
          >
            <SearchInput placeholder="Buscar Ativo ou Local" />
            <TreeView />
          </div>
        )
      }

      {selectedNode?.componentIcon && <ComponentInfo />}
    </div>
  );
};

export default Main;
