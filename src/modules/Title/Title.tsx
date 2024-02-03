import { FC, useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { useTheme } from '@emotion/react';
import { flagsSelector } from '@/store';
import { H1, H3 } from '../../components/Heading';
import { Header, HeaderWrapper, LightH3, Photo, PhotoContainer, TitleContainer } from './parts';
import { Contact } from '../Contact';

type Props = {};

const LARGE_SIZE = 150;
const SMALL_SIZE = 100;

export const Title: FC<Props> = ({}) => {
  const theme = useTheme();

  const { isSidePanelOpen, isLargeFontSize, isMobile } = useRecoilValue(flagsSelector);

  const size = useMemo(() => (isLargeFontSize ? LARGE_SIZE : SMALL_SIZE), [isLargeFontSize]);

  return (
    <HeaderWrapper>
      <Header>
        <PhotoContainer>
          <Photo src='./assets/profile-photo.jpg' width={size} height={size} />
        </PhotoContainer>

        <TitleContainer>
          <H1>name</H1>

          <H3>title</H3>

          <LightH3 color={theme.colors.mediumLight}>cracowLocation</LightH3>
        </TitleContainer>
      </Header>

      {(!isSidePanelOpen || isMobile) && <Contact />}
    </HeaderWrapper>
  );
};
