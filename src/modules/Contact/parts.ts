import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FlexBox, Link } from '@/components';
import { color } from '@/styles/theme';

export const Wrapper = styled(FlexBox)`
  ${color}
  flex-direction: column;
  gap: 10px;
`;

export const Container = styled(FlexBox)`
  gap: 10px;
  flex-wrap: wrap;
`;

type WrapperProps = {
  isOnSide?: boolean;
};

export const LinkWrapper = styled(FlexBox)<WrapperProps>`
  flex-grow: 1;
  flex-basis: calc(50% - 5px);
  align-items: center;
  gap: 5px;

  & button {
    color: ${({ theme }) => theme.colors.transparent};
    fill: ${({ theme }) => theme.colors.transparent};
  }

  &:hover button,
  &:hover a {
    ${({ theme: { colors }, isOnSide }) => css`
      color: ${isOnSide ? colors.light : colors.medium};
      fill: ${isOnSide ? colors.light : colors.medium};
    `}
  }
`;

export const PrintLink = styled(Link)`
   @media screen {
    display: none;
  }
  @media print {
    display: block;
  }
`;

export const ScreenLint = styled(Link)`
  @media screen {
    display: block;
  }
  @media print {
    display: none;
  }
`;
