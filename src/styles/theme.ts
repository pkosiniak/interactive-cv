import { css } from '@emotion/react';
import { asString } from '@/utils/functions';

export const breakpoint = Object.freeze({
  small: 520,
  medium: 800,
});

const lightColors = {
  text: '#000',
  dark: '#333',
  medium: '#666',
  mediumLight: '#999',
  light: '#bbb',
  veryLight: '#f1f9f1',
  background: '#fff',
  body: '#ccc',
  main: '#35472f',
  sidePanel: '#35472f',
  contrast: '#fff',
  transparent: '#0000',
  red: '#c00',
};

export const themeLight = {
  colors: Object.freeze(lightColors),
  breakpoint,
};

const darkColors: Colors = {
  text: '#fff',
  dark: '#333',
  medium: '#666',
  mediumLight: '#999',
  light: '#bbb',
  veryLight: '#2c2f2c',
  background: '#333',
  body: '#222',
  main: '#3f6133',
  sidePanel: '#1d291a',
  contrast: '#fff',
  transparent: '#0000',
  red: '#f00',
};

export const themeDark = {
  colors: Object.freeze(darkColors),
  breakpoint,
};

export type Theme = typeof themeLight;
export type Colors = Theme['colors'];
export type Color = keyof Colors;

export type ColorProps = {
  color?: string;
};

export const color = ({ color }: ColorProps) => css`
  ${color ? `color: ${color};` : ''};
`;

export const fill = ({ color }: ColorProps) => css`
  ${color ? `fill: ${color};` : ''};
`;
export const toCssValue = (value: number | string) => asString(value) ?? `${value}px`;

export enum FONT_SIZE {
  SMALL = 11,
  LARGE = 16,
}

export const PRINT_BREAK = 'print-break';
