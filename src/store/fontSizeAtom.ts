import { atom } from 'recoil';
import { persistEffect } from './effects';

const FONT_SIZE = 'FONT_SIZE';

export const fontSizeAtom = atom({
  key: FONT_SIZE,
  default: 16,
  effects: [persistEffect(FONT_SIZE)],
});

const LARGE_FONT_STATE = 'LARGE_FONT_STATE';

export const largeFontStateAtom = atom({
  key: LARGE_FONT_STATE,
  default: true,
  effects: [persistEffect(LARGE_FONT_STATE)],
});
