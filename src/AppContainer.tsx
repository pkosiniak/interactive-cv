import { FC, useLayoutEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';

import { MainArticle } from './modules/Article';
import { ControlPanel } from './modules/ControlPanel';
import { SidePanel } from './modules/SidePanel';
import { fontSizeAtom, sidePanelAtom, themeAtom } from './store';
import { GlobalStyles, Theme } from './styles';

export const Container = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.mediumLight};
  display: flex;
  justify-content: center;
`;

export const Main = styled.main`
  position: relative;
  display: flex;
  width: fit-content;
`;

export const AppContainer: FC = () => {
  const currentTheme = useRecoilValue(themeAtom);
  const fontSize = useRecoilValue(fontSizeAtom);
  const showSidePanel = useRecoilValue(sidePanelAtom);

  useLayoutEffect(() => {
    document.querySelector('html')?.setAttribute('style', `font-size: ${fontSize}px`);
  }, [fontSize]);

  return (
    <ThemeProvider theme={currentTheme}>
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
