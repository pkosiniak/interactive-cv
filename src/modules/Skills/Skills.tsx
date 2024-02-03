import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { H2, Section } from '@/components';
import { flagsSelector } from '@/store';
import { HItem, HorizontalList } from './parts';
import { Languages } from '../Languages';
import { skills } from './constants';

type Props = {};

export const Skills: FC<Props> = ({}) => {
  const { isSidePanelOpen, isMobile } = useRecoilValue(flagsSelector);

  return (
    <Section>
      <H2>skills</H2>

      <HorizontalList>
        {skills.map((value, index) => (
          <HItem key={index}>{value}</HItem>
        ))}
      </HorizontalList>

      {(!isSidePanelOpen || isMobile) && <Languages />}
    </Section>
  );
};
