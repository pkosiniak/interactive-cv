import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { Global, css, useTheme } from '@emotion/react';
import { fontSizeAtom } from '@/store';
import { Theme } from './theme';

const globalCss = (theme: Theme) => css`
  p,
  span,
  div,
  li,
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${theme.colors.text};
    fill: ${theme.colors.text};
  }
`;

export const GlobalStyles: FC = () => {
  const theme = useTheme();

  return <Global styles={globalCss(theme)} />;
};
