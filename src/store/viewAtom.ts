import { atom } from 'recoil';

export enum VIEW {
  PRINT = 'PRINT',
  REGULAR = 'REGULAR',
}

export const regularViewAtom = atom({
  key: 'REGULAR_VIEW',
  default: true,
});

export const viewAtom = atom({
  key: 'VIEW',
  default: VIEW.REGULAR,
});
