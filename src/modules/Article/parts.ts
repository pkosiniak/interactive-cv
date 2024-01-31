import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';
import { css } from '@emotion/react';

const printView = css`
  width: 14.5cm;
  padding-top: 2cm;
  padding-right: 1cm;
  padding-bottom: 2cm;
  padding-left: 0.7cm;
`;

const regularView = css`
  max-width: 800px;
  padding-top: 80px;
  padding-right: 40px;
  padding-bottom: 80px;
  padding-left: 40px;
`;

export const Article = styled.article<{ isRegular: boolean }>`
  display: flex;
  flex-direction: column;

  ${({ isRegular }) => (isRegular ? regularView : printView)}

  background-color: ${({ theme }) => (theme as Theme).colors.background};
  gap: 40px;
`;
