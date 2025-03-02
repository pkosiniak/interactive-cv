import { atom } from 'recoil';
import { syncEffect } from 'recoil-sync';
import { bool, number } from '@recoiljs/refine';
import { persistEffect } from './effects';

const FONT_SIZE = 'FONT_SIZE';

export const fontSizeAtom = atom({
  key: FONT_SIZE,
  default: 16,
  effects: [syncEffect({ refine: number() }), persistEffect(FONT_SIZE)],
});

const LARGE_FONT_STATE = 'LARGE_FONT_STATE';

export const largeFontStateAtom = atom({
  key: LARGE_FONT_STATE,
  default: true,
  effects: [syncEffect({ refine: bool() }), persistEffect(LARGE_FONT_STATE)],
});
