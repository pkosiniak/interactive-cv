import { themeLight } from '@/styles';
import { atom, selector } from 'recoil';

export const darkModeAtom = atom({
  key: 'DARK_MODE',
  default: false,
});

export const themeAtom = atom({
  key: 'CURRENT_THEME',
  default: themeLight,
});

export const themeSelector = selector({
  key: 'GET_THEME_STATE',
  get: ({ get }) => {
    const isDarkMode = get(darkModeAtom);
    const currentTheme = get(themeAtom);

    return {
      currentTheme,
      isDarkMode,
    };
  },
});
