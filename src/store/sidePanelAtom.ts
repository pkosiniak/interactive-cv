import { atom } from 'recoil';
import { persistEffect } from './effects';

const SIDE_PANEL = 'SIDE_PANEL';

export const sidePanelAtom = atom({
  key: SIDE_PANEL,
  default: true,
  effects: [persistEffect(SIDE_PANEL)],
});
