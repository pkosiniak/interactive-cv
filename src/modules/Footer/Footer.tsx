import { RedBabelIcon } from '@/components/Icons';
import { PRINT_BREAK } from '@/styles';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const StyledFooter = styled.footer`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.7rem;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.medium};
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.body};
  padding: 5px;
  padding-right: 8px;

  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
  }
`;

const RedI = styled.span`
  color: ${({ theme }) => theme.colors.red};
`;

const WhiteI = styled.span`
  color: ${({ theme }) => theme.colors.contrast};
`;

type Props = {};

export const Footer: FC<Props> = ({}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <StyledFooter className={PRINT_BREAK}>
      <i>{t('createdBy')}</i>

      <Link href='https://github.com/pkosiniak' target='_blank'>
        <RedBabelIcon bgColor={theme.colors.transparent} />

        <RedI>{t('redBabel')}</RedI>

        <WhiteI>{t('name')}</WhiteI>
      </Link>
    </StyledFooter>
  );
};
