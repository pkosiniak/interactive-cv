import styled from '@emotion/styled';
import { Theme } from '../../styles/theme';

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  width: 14.5cm;
  padding-top: 2cm;
  padding-right: 1cm;
  padding-bottom: 2cm;
  padding-left: 0.7cm;
  background-color: ${({ theme }) => (theme as Theme).colors.background};
  gap: 40px;
`;
