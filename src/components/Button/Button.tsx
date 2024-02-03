import { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FCC } from '@/types';

const ghost = css`
  padding: 0;
  background-color: #0000;
  border: none;
`;

const StyledButton = styled.button`
  ${ghost}
  font-size: 1rem;
  cursor: pointer;
  color: inherit;
  fill: inherit;
`;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export const Button: FCC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
