import { FC, useCallback, useEffect, useLayoutEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { MainArticle } from './modules/Article';
import { ControlPanel } from './modules/ControlPanel';
import { SidePanel } from './modules/SidePanel';
import {
  Languages,
  darkModeAtom,
  fontSizeAtom,
  isLanguagePersisted,
  isThemePersisted,
  languageAtom,
  mobileAtom,
  sidePanelAtom,
} from './store';
import { GlobalStyles, Theme, themeDark, themeLight } from './styles';
import { getWindowWidth } from './utils/functions';

export const Container = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.body};
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  width: fit-content;
`;

export const AppContainer: FC = () => {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeAtom);
  const [isMobile, setIsMobile] = useRecoilState(mobileAtom);
  const fontSize = useRecoilValue(fontSizeAtom);
  const showSidePanel = useRecoilValue(sidePanelAtom);
  const setLanguage = useSetRecoilState(languageAtom);

  const theme = useMemo(() => (isDarkMode ? themeDark : themeLight), [isDarkMode]);

  useEffect(() => {
    if (isLanguagePersisted()) return;

    const preferred = (navigator.languages ? navigator.languages[0] : navigator.language)?.split('-')[0];
    const language = Languages.find(value => value === preferred);

    if (language) setLanguage(language);
  }, []);

  useLayoutEffect(() => {
    document.querySelector('html')?.setAttribute('style', `font-size: ${fontSize}px`);
  }, [fontSize]);

  useLayoutEffect(() => {
    if (!isThemePersisted())
      setIsDarkMode(!!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }, []);

  const handleResize = useCallback(() => {
    const width = getWindowWidth();
    setIsMobile(width <= theme.breakpoint.medium);
  }, [getWindowWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Main>
          <ControlPanel />
          {showSidePanel && !isMobile && <SidePanel />}
          <MainArticle />
        </Main>
      </Container>
    </ThemeProvider>
  );
};
