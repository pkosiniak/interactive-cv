import { atom } from 'recoil';

export enum VIEW {
  PRINT = 'PRINT',
  RESPONSIVE = 'RESPONSIVE',
}

export const responsiveViewAtom = atom({
  key: 'RESPONSIVE_VIEW',
  default: true,
});

export const viewAtom = atom({
  key: 'VIEW',
  default: VIEW.RESPONSIVE,
});
