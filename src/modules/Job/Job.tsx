import { useRecoilValue } from 'recoil';
import { Box, H3 } from '@/components';
import { Logo } from '@/components/Image';
import { FCC } from '@/types';
import { useTheme } from '@emotion/react';
import { flagsSelector } from '@/store';
import { Container, LightH4, Wrapper } from './parts';

const SMALL_LOGO_SIZE = 32;

type Props = {
  position: string;
  company: string;
  duration: string;
  location?: string;
  imgSrc?: string;
  className?: string;
};

export const Job: FCC<Props> = ({
  imgSrc = './assets/default_logo.jpg',
  position,
  company,
  duration,
  location,
  className,
  children,
}) => {
  const theme = useTheme();

  const { isLargeFontSize } = useRecoilValue(flagsSelector);

  return (
    <Wrapper className={className}>
      <Container>
        <Logo src={imgSrc} size={isLargeFontSize ? undefined : SMALL_LOGO_SIZE} />

        <Box>
          <H3>{company}</H3>
          <H3>{position}</H3>
          <LightH4>{duration}</LightH4>
          {location && <LightH4 color={theme.colors.mediumLight}>{location}</LightH4>}
        </Box>
      </Container>

      {children}
    </Wrapper>
  );
};
