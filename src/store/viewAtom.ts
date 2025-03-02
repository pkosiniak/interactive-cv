import { atom } from 'recoil';
import { bool } from '@recoiljs/refine';
import { syncEffect } from 'recoil-sync';
import { persistEffect } from './effects';

export enum VIEW {
  PRINT = 'PRINT',
  RESPONSIVE = 'RESPONSIVE',
}

const RESPONSIVE_VIEW = 'RESPONSIVE_VIEW';

export const viewAtom = atom({
  key: 'RESPONSIVE_VIEW',
  default: true,
  effects: [syncEffect({ refine: bool() }), persistEffect(RESPONSIVE_VIEW)],
});
