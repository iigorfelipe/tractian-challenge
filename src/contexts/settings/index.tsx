import { useContext } from "react";
import { SettingsContext } from "./context"

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      'useSettings deve ser usado em um SettingsProvider'
    );
  };

  return context;
};