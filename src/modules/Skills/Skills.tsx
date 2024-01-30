import { FC } from 'react';
import { H2, Section } from '@/components';
import { HItem, HorizontalList } from './parts';
import { Languages } from '../Languages';

type Props = {};

const skills = [
  'TypeScript',
  'React',
  'Node.js',
  'JavaScript',
  'HTML',
  'Cascading Style Sheets (CSS)',
  'React-Native',
  'Embedded Systems',
  'Express.js',
  'Redux',
];

export const Skills: FC<Props> = ({}) => {
  return (
    <Section>
      <H2>skills</H2>

      <HorizontalList>
        {skills.map((value, index) => (
          <HItem key={index}>{value}</HItem>
        ))}
      </HorizontalList>

      <Languages />
    </Section>
  );
};
