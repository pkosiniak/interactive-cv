import { atom } from 'recoil';
import { persistEffect } from './effects';

const LANGUAGE_SATE = 'LANGUAGE_SATE';

export enum LANGUAGE {
  EN = 'en',
  PL = 'pl',
}

export const languageAtom = atom({
  key: LANGUAGE_SATE,
  default: LANGUAGE.EN,
  effects: [persistEffect(LANGUAGE_SATE)],
});
