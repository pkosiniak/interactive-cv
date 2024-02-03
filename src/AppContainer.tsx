import { FC, useLayoutEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { MainArticle } from './modules/Article';
import { ControlPanel } from './modules/ControlPanel';
import { SidePanel } from './modules/SidePanel';
import { darkModeAtom, fontSizeAtom, isThemePersisted, sidePanelAtom } from './store';
import { GlobalStyles, Theme, themeDark, themeLight } from './styles';

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
  const fontSize = useRecoilValue(fontSizeAtom);
  const showSidePanel = useRecoilValue(sidePanelAtom);

  const theme = useMemo(() => (isDarkMode ? themeDark : themeLight), [isDarkMode]);

  useLayoutEffect(() => {
    document.querySelector('html')?.setAttribute('style', `font-size: ${fontSize}px`);
  }, [fontSize]);

  useLayoutEffect(() => {
    if (!isThemePersisted())
      setIsDarkMode(!!(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Main>
          <ControlPanel />
          {showSidePanel && <SidePanel />}
          <MainArticle />
        </Main>
      </Container>
    </ThemeProvider>
  );
};
