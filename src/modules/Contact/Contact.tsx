import { FC, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useRecoilValue } from 'recoil';
import { useTheme } from '@emotion/react';
import { Mail24Regular, Phone24Regular, Globe24Regular } from '@fluentui/react-icons';
import { LinkedInIcon } from '@/components/Icons';
import { CopyButton, H4, Link } from '@/components';
import { flagsSelector } from '@/store/flagsSelector';
import { Container, LinkWrapper, PrintLink, ScreenLint, Wrapper } from './parts';

type Props = {
  isOnSide?: boolean;
};

const phoneMask = (value: string) => {
  const parts: string[] = [];

  for (let i = 0; i < value.length; i += 3) {
    parts.push(value.substring(i, i + 3));
  }

  return parts.join(' ');
};

export const Contact: FC<Props> = ({ isOnSide = false }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { isResponsiveView } = useRecoilValue(flagsSelector);

  const mailHref = useMemo(() => `mailto:${t('email')}`, [t]);
  const phoneHref = useMemo(() => `tel:${t('phone')}`, [t]);
  const likedInHref = useMemo(() => `https://www.${t('linkedIn')}`, [t]);
  const cvHref = useMemo(() => `https://www.${t('onlineCV')}`, [t]);

  const sideColor = useMemo(() => (isOnSide ? theme.colors.contrast : undefined), [isOnSide]);
  const shouldSplit = useMemo(() => isOnSide, [isOnSide]);

  return (
    <Wrapper>
      {isOnSide && <H4 color={sideColor}>contact</H4>}

      <Container>
        <LinkWrapper isOnSide={isOnSide}>
          <Mail24Regular />

          <Link href={mailHref} color={sideColor} breakAt={shouldSplit ? '@' : ''}>
            email
          </Link>

          <CopyButton textToCopy={t('email')} hidden={!isResponsiveView} />
        </LinkWrapper>

        <LinkWrapper isOnSide={isOnSide}>
          <Phone24Regular />

          <Link href={phoneHref} color={sideColor}>
            {phoneMask(t('phone'))}
          </Link>

          <CopyButton textToCopy={t('phone')} hidden={!isResponsiveView} />
        </LinkWrapper>
      </Container>

      <Container>
        <LinkWrapper isOnSide={isOnSide}>
          <LinkedInIcon color={sideColor} />

          <Link
            href={likedInHref}
            target='_blank'
            rel='noopener noreferrer'
            color={sideColor}
            breakAt={shouldSplit ? 'pawel' : ''}
          >
            linkedIn
          </Link>

          <CopyButton textToCopy={likedInHref} hidden={!isResponsiveView} />
        </LinkWrapper>

        <LinkWrapper isOnSide={isOnSide}>
          <Globe24Regular color={sideColor} />

          <ScreenLint
            href={cvHref}
            target='_blank'
            rel='noopener noreferrer'
            color={sideColor}
            breakAt={shouldSplit ? 'pawel' : ''}
          >
            onlineCV
          </ScreenLint>

          <PrintLink
            href={cvHref}
            target='_blank'
            rel='noopener noreferrer'
            color={sideColor}
            breakAt={shouldSplit ? 'pawel' : ''}
          >
            onlineCVPrint
          </PrintLink>

          <CopyButton textToCopy={cvHref} hidden={!isResponsiveView} />
        </LinkWrapper>
      </Container>
    </Wrapper>
  );
};
