import { AnchorHTMLAttributes, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { color } from '@/styles/theme';
import { FCC } from '@/types';
import { asString, breakLineAt } from '@/utils/functions';
import styled from '@emotion/styled';

const Anchor = styled.a`
  ${color}

  &:link {
    color: ${({ theme }) => theme.colors.text};
    ${color}
    text-decoration: none;
  }

  &:visited {
    color: ${({ theme }) => theme.colors.text};
    ${color}
    text-decoration: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.mediumLight};
    /* ${color} */
    text-decoration: none;
    transition: color 0.5s;
  }

  &:active {
    color: ${({ theme }) => theme.colors.mediumLight};
    /* ${color} */
    text-decoration: none;
  }
`;

type Props = {
  text?: string;
  color?: string;
  breakAt?: string;
};

export const Link: FCC<Props & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  text = '',
  children,
  color,
  breakAt,
  ...props
}) => {
  const { t } = useTranslation();

  const value = useMemo(() => t(asString(children) ?? text), [t, text, children]);

  return (
    <Anchor
      color={color}
      {...props}
      dangerouslySetInnerHTML={breakAt ? { __html: breakLineAt(value, breakAt) } : undefined}
    >
      {breakAt ? undefined : value}
    </Anchor>
  );
};
