import { atom } from 'recoil';
import { bool } from '@recoiljs/refine';
import { syncEffect } from 'recoil-sync';
import { getWindowWidth } from '@/utils/functions';
import { themeLight } from '@/styles';
import { persistEffect } from './effects';

const SIDE_PANEL = 'SIDE_PANEL';

export const sidePanelAtom = atom({
  key: SIDE_PANEL,
  default: true,
  effects: [syncEffect({ refine: bool() }), persistEffect(SIDE_PANEL)],
});

export const mobileAtom = atom({
  key: 'MOBILE_ATOM',
  default: getWindowWidth() <= themeLight.breakpoint.medium,
});
