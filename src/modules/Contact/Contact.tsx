import { CopyButton, H4, Link } from '@/components';
import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Container, LinkWrapper, Wrapper } from './parts';
import { useTheme } from '@emotion/react';
import { Mail24Regular, Phone24Regular } from '@fluentui/react-icons';
import { LinkedInIcon } from '@/components/Icons';

type Props = {
  isOnSide?: boolean;
};

export const Contact: FC<Props> = ({ isOnSide = false }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const mailHref = useMemo(() => `mailto:${t('email')}`, [t]);
  const phoneHref = useMemo(() => `tel:${t('phone')}`, [t]);
  const likedInHref = useMemo(() => `https://www.${t('linkedIn')}`, [t]);

  const sideColor = useMemo(() => (isOnSide ? theme.colors.contrast : undefined), [isOnSide]);
  // const iconColor = useMemo(() => (isOnSide ? theme.colors.text : undefined), [isOnSide]);

  return (
    <Wrapper>
      {isOnSide && <H4 color={sideColor}>contact</H4>}

      <Container>
        <LinkWrapper color={isOnSide ? theme.colors.light : undefined}>
          <Mail24Regular />

          <Link href={mailHref} color={sideColor} style={{ textAlign: 'right' }} breakAt={isOnSide ? '@' : ''}>
            email
          </Link>

          <CopyButton textToCopy={t('email')} />
        </LinkWrapper>

        <LinkWrapper>
          <Phone24Regular />

          <Link href={phoneHref} color={sideColor}>
            phone
          </Link>

          <CopyButton textToCopy={t('phone')} />
        </LinkWrapper>
      </Container>

      <Container>
        <LinkWrapper>
          <LinkedInIcon color={sideColor} />

          <Link
            href={likedInHref}
            target='_blank'
            rel='noopener noreferrer'
            color={sideColor}
            style={{ textAlign: 'right' }}
            breakAt={isOnSide ? 'pawel' : ''}
          >
            linkedIn
          </Link>

          <CopyButton textToCopy={t('linkedIn')} />
        </LinkWrapper>
      </Container>
    </Wrapper>
  );
};
