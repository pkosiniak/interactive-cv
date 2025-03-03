import { useMemo } from 'react';
import { LOCALES_KEYS } from '@/locales/en';

export const asString = (value: unknown) => (typeof value === 'string' ? value : undefined);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const breakLineAt = (value: string, breakAt: string) => value.replace(breakAt, `<wbr>${breakAt}`);

export const isNullable = (value: unknown): value is null | undefined => value === null || value === undefined;

export const getWindowWidth = () =>
  Math.max(
    // document.body.scrollWidth,
    // document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth,
    // window.innerWidth,
    window.screen.width
  );

export const toPrefix = (prefixes: string[]) =>
  prefixes.flatMap(entity => entity.split('.').filter(value => value)).join('.');

export const withPrefix = (...prefixes: string[]) => {
  const prefix = toPrefix(prefixes);

  return <T extends string = LOCALES_KEYS>(value?: T) => {
    const suffix = value ?? 'name';
    return prefix ? `${prefix}.${suffix}` : suffix;
  };
};

export const usePrefix = (...prefix: string[]) => useMemo(() => withPrefix(...prefix), [prefix]);
