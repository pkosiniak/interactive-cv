import { atom } from 'recoil';
import { persistEffect } from './effects';

export enum VIEW {
  PRINT = 'PRINT',
  RESPONSIVE = 'RESPONSIVE',
}

const RESPONSIVE_VIEW = 'RESPONSIVE_VIEW';

export const viewAtom = atom({
  key: 'RESPONSIVE_VIEW',
  default: true,
  effects: [persistEffect(RESPONSIVE_VIEW)],
});
