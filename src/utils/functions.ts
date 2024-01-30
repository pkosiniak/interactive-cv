export const asString = (value: unknown) => (typeof value === 'string' ? value : undefined);

export const isString = (value: unknown): value is string => typeof value === 'string';

export const breakLineAt = (value: string, breakAt: string) => value.replace(breakAt, `<br>${breakAt}`);
