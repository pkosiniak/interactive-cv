import { Box, H3, H4 } from '@/components';
import { Logo } from '@/components/Image';
import { FCC } from '@/types';
import { useTheme } from '@emotion/react';
import { Container, LightH4, Wrapper } from './parts';

type Props = {
  position: string;
  company: string;
  duration: string;
  location?: string;
  imgSrc?: string;
};

export const Job: FCC<Props> = ({
  imgSrc = './assets/default_logo.jpg',
  position,
  company,
  duration,
  location,
  children,
}) => {
  const theme = useTheme();

  return (
    <Wrapper>
      <Container>
        <Logo src={imgSrc} />

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
