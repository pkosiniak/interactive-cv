import { FC } from 'react';
import { H1, H3 } from '../../components/Heading';
import { useTheme } from '../../styles/theme';
import { Header, HeaderWrapper, LightH3, Photo, PhotoContainer, TitleContainer } from './parts';
import { Contact } from '../Contact';

type Props = {};

const SIZE = 150;

export const Title: FC<Props> = ({}) => {
  const theme = useTheme();

  return (
    <HeaderWrapper>
      <Header>
        <PhotoContainer>
          <Photo src='./assets/profile-photo.jpg' width={SIZE} height={SIZE} />
        </PhotoContainer>

        <TitleContainer>
          <H1>name</H1>
          <H3>title</H3>
          <LightH3 color={theme.colors.mediumLight}>cracowLocation</LightH3>
          {/* <Contact /> */}
        </TitleContainer>
      </Header>

      <Contact />
    </HeaderWrapper>
  );
};
