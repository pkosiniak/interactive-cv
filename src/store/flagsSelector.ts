import { selector } from 'recoil';
import { largeFontStateAtom } from './fontSizeAtom';
import { sidePanelAtom } from './sidePanelAtom';
import { darkModeAtom } from './themeAtom';
import { viewAtom } from './viewAtom';

export const flagsSelector = selector({
  key: 'FLAGS',
  get: ({ get }) => {
    const isLargeFontSize = get(largeFontStateAtom);
    const isSidePanelOpen = get(sidePanelAtom);
    const isDarkMode = get(darkModeAtom);
    const isResponsiveView = get(viewAtom);

    return {
      isLargeFontSize,
      isSidePanelOpen,
      isDarkMode,
      isResponsiveView,
    };
  },
});
