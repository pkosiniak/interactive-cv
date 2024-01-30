import { useTranslation } from 'react-i18next';
import * as P from './parts';
import { FCC } from '../../types';
import { asString } from '../../utils/functions';

type Props = {
  text?: string;
  color?: string;
};

export const H1: FCC<Props> = ({ text = '', children, color }) => {
  const { t } = useTranslation();

  return <P.H1 color={color}>{t(asString(children) ?? text)}</P.H1>;
};

export const H2: FCC<Props> = ({ text = '', children, color }) => {
  const { t } = useTranslation();

  return <P.H2 color={color}>{t(asString(children) ?? text)}</P.H2>;
};

export const H3: FCC<Props> = ({ text = '', children, color }) => {
  const { t } = useTranslation();

  return <P.H3 color={color}>{t(asString(children) ?? text)}</P.H3>;
};

export const H4: FCC<Props> = ({ text = '', children, color }) => {
  const { t } = useTranslation();

  return <P.H4 color={color}>{t(asString(children) ?? text)}</P.H4>;
};

export const H5: FCC<Props> = ({ text = '', children, color }) => {
  const { t } = useTranslation();

  return <P.H5 color={color}>{t(asString(children) ?? text)}</P.H5>;
};
