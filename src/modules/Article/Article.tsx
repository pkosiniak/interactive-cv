import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { flagsSelector } from '@/store';
import { Summary } from '../Summary';
import { Experience } from '../Experience';
import { Education } from '../Education/Education';
import { Skills } from '../Skills';
import { Title } from '../Title';
import { Footer } from '../Footer';
import { StyledArticle } from './parts';

type Props = {};

export const MainArticle: FC<Props> = ({}) => {
  const { isResponsiveView, isSidePanelOpen } = useRecoilValue(flagsSelector);

  return (
    <StyledArticle isResponsive={isResponsiveView} isSidePanelOpen={isSidePanelOpen}>
      <Title />

      <Summary />

      <Experience />

      <Education />

      <Skills />

      <Footer />
    </StyledArticle>
  );
};
