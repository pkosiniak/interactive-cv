import { useTranslation } from 'react-i18next';
import { LiHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { FCC } from '../types';
import { isString } from '../utils/functions';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  padding-left: 0.5rem;
  list-style-type: '•';
`;

type Props = {
  text?: string;
};

const Li = styled.li`
  /* color: ${({ theme }) => theme.colors.text}; */
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
`;

export const ListItem: FCC<Props & LiHTMLAttributes<HTMLLIElement>> = ({ text = '', children, ...props }) => {
  const { t } = useTranslation();

  return (
    <Li {...props}>
      {text ? t(text) : ''}
      {isString(children) ? t(children as string) : children}
    </Li>
  );
};
