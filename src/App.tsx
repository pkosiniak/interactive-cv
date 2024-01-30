import { FC, useContext } from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { Theme } from './styles/theme';
import styled from '@emotion/styled';
import { MainArticle } from './modules/Article';
import { SidePanel } from './modules/SidePanel';
import { ControlPanel } from './modules/ControlPanel';
import { ThemeContext, ThemeContextProvider } from './store';

const Container = styled.div`
  background-color: ${({ theme }) => (theme as Theme).colors.light};
  display: flex;
  justify-content: center;
`;

const Main = styled.main`
  position: relative;
  display: flex;
  width: fit-content;
`;

const AppContainer: FC = () => {
  const { value } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={value.theme}>
      <Container>
        <Main>
          {/* <ControlPanel /> */}
          <SidePanel></SidePanel>
          <MainArticle></MainArticle>
        </Main>
      </Container>
    </ThemeProvider>
  );
};

export const App: FC = ({}) => {
  return (
    <ThemeContextProvider>
      <AppContainer />
    </ThemeContextProvider>
  );
};

