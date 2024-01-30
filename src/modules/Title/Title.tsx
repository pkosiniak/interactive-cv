import { FC } from 'react';
import { H1, H3 } from '../../components/Heading';
import { useTheme } from '../../styles/theme';
import { Header, HeaderWrapper, Photo, PhotoContainer, TitleContainer } from './parts';
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
          <H3 color={theme.colors.light}>cracowLocation</H3>
          {/* <Contact /> */}
        </TitleContainer>
      </Header>

      <Contact />
    </HeaderWrapper>
  );
};
