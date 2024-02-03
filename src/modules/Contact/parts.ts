import { FlexBox } from '@/components';
import { color } from '@/styles/theme';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

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
