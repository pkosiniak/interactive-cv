import { css } from '@emotion/react';
import styled from '@emotion/styled';

type Props = {
  color?: string;
};

const common = ({ color }: Props) => css`
  ${color ? `color: ${color};` : ''};
  margin: 0;
  font-weight: 500;
`;

export const H1 = styled.h1`
  ${common}
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const H2 = styled.h2`
  ${common}
  font-size: 1.7rem;
`;

export const H3 = styled.h3`
  ${common}
  font-size: 1.3rem;
`;

export const H4 = styled.h4`
  ${common}
  font-size: 1.1rem;
`;

export const H5 = styled.h5`
  ${common}
  font-size: 1rem;
  font-weight: 700;
`;
