import { FC } from 'react';
import { Article } from './parts';
import { Summary } from '../Summary';
import { Experience } from '../Experience';
import { Education } from '../Education/Education';
import { Skills } from '../Skills';
import { Title } from '../Title';

type Props = {};

export const MainArticle: FC<Props> = ({}) => {
  return (
    <Article>
      <Title />

      <Summary />

      <Experience />

      <Education />

      <Skills />
    </Article>
  );
};
