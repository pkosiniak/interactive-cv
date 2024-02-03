import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { color } from '@/styles/theme';
import { FCC } from '../types';
import { isString } from '../utils/functions';

type Props = {
  text?: string;
  color?: string;
  className?: string;
};

const Div = styled.div`
  /* color: ${({ theme }) => theme.colors.text}; */
  ${color}
`;

const Span = styled.span`
  /* color: ${({ theme }) => theme.colors.text}; */
  ${color}
`;

export const Text: FCC<Props> = ({ text = '', className, children, color }) => {
  const { t } = useTranslation();

  return (
    <Div className={className} color={color}>
      {text ? t(text) : ''}
      {isString(children) ? t(children as string) : children}
    </Div>
  );
};

export const InlineText: FCC<Props> = ({ text = '', children, color }) => {
  const { t } = useTranslation();

  return (
    <Span color={color}>
      {text ? t(text) : ''}
      {isString(children) ? t(children as string) : children}
    </Span>
  );
};
