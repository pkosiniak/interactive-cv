import { asString } from '@/utils/functions';
import { css, useTheme as useThemeHook } from '@emotion/react';

const lightColors = {
  text: '#000',
  medium: '#666',
  light: '#999',
  background: '#fff',
  sidePanel: '#35472f',
  contrast: '#fff',
  transparent: '#0000',
};

export const themeLight = {
  colors: lightColors,
};

const darkColors = {
  text: '#fff',
  medium: '#666',
  light: '#999',
  background: '#333',
  sidePanel: '#35472f',
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
