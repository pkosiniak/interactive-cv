import { atom } from 'recoil';

export const fontSizeAtom = atom({
  key: 'FONT_SIZE',
  default: 16,
});

export const largeFontStateAtom = atom({
  key: 'LARGE_FONT_STATE',
  default: true,
});
