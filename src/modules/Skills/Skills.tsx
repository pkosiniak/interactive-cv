import { FC } from 'react';
import { H2, Section } from '@/components';
import { HItem, HorizontalList } from './parts';
import { Languages } from '../Languages';
import { useRecoilValue } from 'recoil';
import { flagsSelector } from '@/store';
import { skills } from './constants';

type Props = {};

export const Skills: FC<Props> = ({}) => {
  const { isSidePanelOpen } = useRecoilValue(flagsSelector);

  return (
    <Section>
      <H2>skills</H2>

      <HorizontalList>
        {skills.map((value, index) => (
          <HItem key={index}>{value}</HItem>
        ))}
      </HorizontalList>

      {!isSidePanelOpen && <Languages />}
    </Section>
  );
};
