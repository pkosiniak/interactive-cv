import { AtomEffect, atom } from 'recoil';
import i18next from 'i18next';
import { string } from '@recoiljs/refine';
import { syncEffect } from 'recoil-sync';
import { persistEffect } from './effects';

const LANGUAGE_SATE = 'LANGUAGE_SATE';

export enum LANGUAGE {
  EN = 'en',
  PL = 'pl',
}

export const Languages = [LANGUAGE.EN, LANGUAGE.PL];

export const switchLanguageEffect: AtomEffect<LANGUAGE> = ({ onSet }) => onSet(next => i18next.changeLanguage(next));

export const languageAtom = atom({
  key: LANGUAGE_SATE,
  default: LANGUAGE.EN,
  effects: [
    syncEffect({ refine: string() }) as AtomEffect<LANGUAGE>,
    persistEffect(LANGUAGE_SATE),
    switchLanguageEffect,
  ],
});

export const isLanguagePersisted = () => !!localStorage.getItem(LANGUAGE_SATE);
