import { FC } from 'react';
import { Article } from './parts';
import { Summary } from '../Summary';
import { Experience } from '../Experience';
import { Education } from '../Education/Education';
import { Skills } from '../Skills';
import { Title } from '../Title';
import { useRecoilValue } from 'recoil';
import { regularViewAtom } from '@/store/viewAtom';

type Props = {};

export const MainArticle: FC<Props> = ({}) => {
  const isRegular = useRecoilValue(regularViewAtom);

  return (
    <Article isRegular={isRegular}>
      <Title />

      <Summary />

      <Experience />

      <Education />

      <Skills />
    </Article>
  );
};
