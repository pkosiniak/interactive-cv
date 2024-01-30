import { Button, FlexBox } from '@/components';
import { color, fill } from '@/styles/theme';
import styled from '@emotion/styled';

export const Wrapper = styled(FlexBox)`
  ${color}
  flex-direction: column;
  gap: 10px;
`;

export const Container = styled(FlexBox)`
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export const LinkWrapper = styled(FlexBox)`
  align-items: center;
  gap: 5px;

  & button {
    color: ${({ theme }) => theme.colors.transparent};
    fill: ${({ theme }) => theme.colors.transparent};
  }

  &:hover button {
    color: ${({ theme }) => theme.colors.medium};
    fill: ${({ theme }) => theme.colors.medium};
    ${color}
    ${fill}
  }
`;

export const CopyButton = styled(Button)``;
