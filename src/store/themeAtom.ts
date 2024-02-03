import { atom } from 'recoil';
import { persistEffect } from './effects';

const DARK_MODE = 'DARK_MODE';

export const darkModeAtom = atom({
  key: DARK_MODE,
  default: false,
  effects: [persistEffect(DARK_MODE)],
});

export const isThemePersisted = () => !!localStorage.getItem(DARK_MODE);
