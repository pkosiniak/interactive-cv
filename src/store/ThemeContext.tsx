import { Theme, themeLight } from '@/styles/theme';
import { FCC } from '@/types';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

export type ThemeContextType = {
  value: { theme: Theme };
  dispatch: Dispatch<SetStateAction<{ theme: Theme }>>;
};

const initialState = {
  value: { theme: themeLight },
  dispatch: () => void 0,
};

export const ThemeContext = createContext<ThemeContextType>(initialState);

export const ThemeContextProvider: FCC = ({ children }) => {
  const [state, setState] = useState<{ theme: Theme }>(initialState.value);

  return <ThemeContext.Provider value={{ value: state, dispatch: setState }}>{children}</ThemeContext.Provider>;
};
