import styled from '@emotion/styled';
import { FCC } from '../types';
import { isString } from '../utils/functions';
import { useTranslation } from 'react-i18next';
import { color } from '@/styles/theme';

type Props = {
  text?: string;
  color?: string;
  className?: string
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
