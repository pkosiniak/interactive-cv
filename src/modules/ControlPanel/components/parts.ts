import styled from '@emotion/styled';
import { Button } from '../../../components/Button';
import { css } from '@emotion/react';

const SIZE = '28px';

export const Toggle = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background};
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.mediumLight};
  border-radius: 50px;
  display: flex;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 50px;
  padding: 4px;
  /* position: absolute; */
`;
