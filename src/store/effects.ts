import { AtomEffect } from 'recoil';
import { isNullable } from '@/utils/functions';

export const persistEffect =
  <T>(key: string): AtomEffect<T> =>
  ({ setSelf, onSet }) => {
    const saved = localStorage.getItem(key);

    if (!isNullable(saved)) setSelf(JSON.parse(saved));

    onSet((next, _, isReset) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(next));
    });
  };
