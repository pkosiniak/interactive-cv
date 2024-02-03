import { atom } from 'recoil';
import { persistEffect } from './effects';
import { getWindowWidth } from '@/utils/functions';
import { themeLight } from '@/styles';

const SIDE_PANEL = 'SIDE_PANEL';

export const sidePanelAtom = atom({
  key: SIDE_PANEL,
  default: true,
  effects: [persistEffect(SIDE_PANEL)],
});

export const mobileAtom = atom({
  key: 'MOBILE_ATOM',
  default: getWindowWidth() <= themeLight.breakpoint.medium,
});
