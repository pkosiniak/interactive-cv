import { asString } from '@/utils/functions';
import { css, useTheme as useThemeHook } from '@emotion/react';

const lightColors = {
  text: '#000',
  dark: '#333',
  medium: '#666',
  mediumLight: '#999',
  light: '#bbb',
  veryLight: '#f1f9f1',
  background: '#fff',
  main: '#35472f',
  contrast: '#fff',
  transparent: '#0000',
};

export const themeLight = {
  colors: lightColors,
};

const darkColors: Colors = {
  text: '#fff',
  dark: '#333',
  medium: '#666',
  mediumLight: '#999',
  light: '#bbb',
  veryLight: '#2c2f2c',
  background: '#333',
  main: '#35472f',
  contrast: '#fff',
  transparent: '#0000',
};

export const themeDark = {
  colors: darkColors,
};

export type Theme = typeof themeLight;
export type Colors = Theme['colors'];
export type Color = keyof Colors;

export const useTheme = () => useThemeHook() as Theme;

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
