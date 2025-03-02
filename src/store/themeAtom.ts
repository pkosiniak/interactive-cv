import { atom } from 'recoil';
import { bool } from '@recoiljs/refine';
import { syncEffect } from 'recoil-sync';
import { persistEffect } from './effects';

const DARK_MODE = 'DARK_MODE';

export const darkModeAtom = atom({
  key: DARK_MODE,
  default: false,
  effects: [syncEffect({ refine: bool() }), persistEffect(DARK_MODE)],
});

export const isThemePersisted = () => !!localStorage.getItem(DARK_MODE);
