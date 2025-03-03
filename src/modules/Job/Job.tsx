import { useRecoilValue } from 'recoil';
import { useTheme } from '@emotion/react';
import { useMemo } from 'react';
import { Box, H3 } from '@/components';
import { Logo } from '@/components/Image';
import { FCC } from '@/types';
import { flagsSelector } from '@/store';
import { usePrefix } from '@/utils/functions';
import { Container, LightH4, Wrapper } from './parts';

const SMALL_LOGO_SIZE = 32;

type Props = {
  company: string;
  location?: string | boolean;
  imgSrc?: string;
  className?: string;
};

export const Job: FCC<Props> = ({ imgSrc = './assets/default_logo.jpg', company, location, className, children }) => {
  const theme = useTheme();
  const s = usePrefix(company);

  const { isLargeFontSize } = useRecoilValue(flagsSelector);
  const loc = useMemo(
    () => (typeof location === 'string' ? location : location ? 'cracowLocation' : undefined),
    [location]
  );

  return (
    <Wrapper className={className}>
      <Container>
        <Logo src={imgSrc} size={isLargeFontSize ? undefined : SMALL_LOGO_SIZE} />

        <Box>
          <H3>{s('name')}</H3>
          <H3>{s('position')}</H3>
          <LightH4>{s('duration')}</LightH4>
          {loc && <LightH4 color={theme.colors.mediumLight}>{loc}</LightH4>}
        </Box>
      </Container>

      {children}
    </Wrapper>
  );
};
