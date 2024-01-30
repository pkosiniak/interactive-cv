import { ColorProps, color, fill, toCssValue } from '@/styles/theme';
import { FCC } from '@/types';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type SizeProps = {
  size?: number | string;
};

const sizeStyle = ({ size }: SizeProps) => css`
  ${size
    ? css`
        width: ${toCssValue(size)};
        height: ${toCssValue(size)};
      `
    : ''}
`;

const Span = styled.span`
  display: flex;
  width: 24px;
  height: 24px;
  ${sizeStyle}
  ${color}
  & * {
    fill: ${({ theme }) => theme.colors.text};
    ${fill}
  }
`;

export type IconProps = SizeProps & ColorProps;

export const Icon: FCC<IconProps> = ({ children, ...props }) => {
  return <Span {...props}>{children}</Span>;
};
