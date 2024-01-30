import { Box, H3, H4 } from '@/components';
import { Logo } from '@/components/Image';
import { FCC } from '@/types';
import { useTheme } from '@emotion/react';
import { Container, Wrapper } from './parts';

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
          <H4>{duration}</H4>
          {location && <H4 color={theme.colors.light}>{location}</H4>}
        </Box>
      </Container>

      {children}
    </Wrapper>
  );
};
